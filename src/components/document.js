import React, { useEffect, useState } from "react";
import { Storage } from "aws-amplify";
import { DocumentItem, TagShowItemCollection } from "../ui-components";
import { Image, Collection } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import * as queries from '../graphql/queries';
import fileDownload from 'js-file-download'

const Document = () => {
  const [documents, setDocuments] = useState();
  const [categories, setCategories] = useState();

  useEffect(() => {
    async function queryDocuments() {
      const {
        data: { listDocuments }
      } = await API.graphql({
        query: queries.listDocuments,
        variables: {
          _deleted: false
        },
        authMode: 'API_KEY',
      });
      setDocuments(listDocuments.items.sort((a, b) => (a.createdAt <= b.createdAt) ? 1 : ((b.createdAt <= a.createdAt) ? -1 : 0)));

      const {
        data: { listCategories }
      } = await API.graphql({
        query: queries.listCategories,
        variables: {
          _deleted: false
        },
        authMode: 'API_KEY',
      });
      setCategories(listCategories.items);
    }

    queryDocuments();
  }, []);

  const getFile = async (evt) => {
    const downloadButton = evt.currentTarget;
    const filename = downloadButton.getAttribute("filename");
    const result = await Storage.get(filename, { download: true });
    const url = window.URL.createObjectURL(result.Body);

    return {
      fileBody: result.Body,
      filename: filename,
      url: url,
    }
  }
  const overrideItemsTag = ({ item, _ }) => ({
    overrides: {
      txt_tag: {
        children: item?.tag?.name
      }
    }
  });
  const overrideItems = (item, index) => ({
    overrides: {
      btn_edit: {
        onClick: () => {
          window.open('/document/' + item?.item?.id);
        }
      },
      btn_download: {
        onClick: async (evt) => {
          const fileInfo = await getFile(evt);

          // download the file with the name of the file, the name remove the extension
          fileDownload(fileInfo.fileBody, fileInfo.filename.replace(/\.[^/.]+$/, ""));
        }
      },
      btn_view: {
        onClick: async (evt) => {
          const fileInfo = await getFile(evt);
          window.open(fileInfo.url);
        }
      },
      btn_versions: {
        onClick: () => {
          window.open('/versions/' + item?.item?.filename);
        }
      },
      txt_description: {
        style: { overflowY: "auto" }
      },
      txt_categoryname: {
        children: categories?.find(category => category.id === item?.item?.categoryID)?.name 
      },
      div_tags: {
        children: <TagShowItemCollection items={item?.item?.tags?.items.filter(i => i?._deleted !== true) } overrideItems={overrideItemsTag}></TagShowItemCollection>
      },
    }
  });

  return (
    <div>
      <Image
        width={"100vw"}
        height="350px"
        position="relative"
        padding="0px 0px px 0px"
        marginBottom={"50px"}
        src="https://parisinstitute.org/wp-content/uploads/2019/02/Archive.jpg"
      />



      <Collection
        type="list"
        direction="column"
        alignItems="center"
        items={documents || []}
      >
        {(item, index) => (
          <DocumentItem
            document={item}
            key={item.id}
            {...(overrideItems && overrideItems({ item, index }))}
          ></DocumentItem>
        )}
      </Collection>
    </div>
  );
};

export default Document;

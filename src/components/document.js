import React, { useEffect, useState } from "react";
import { Storage } from "aws-amplify";
import { DocumentItemCollection, TagShowItemCollection } from "../ui-components";
import { Image } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import * as queries from '../graphql/queries';
import fileDownload from 'js-file-download'

const Document = () => {
  const [documents, setDocuments] = useState();

  useEffect(() => {
    async function queryDocuments() {
      if (documents === undefined) {
        const {
            data: { listDocuments }
        } = await API.graphql({
            query: queries.listDocuments,
            authMode: 'API_KEY',
        });
        setDocuments(listDocuments.items);
      }
    };

    queryDocuments();
  }, []);

  const getFile = async (evt) => {
    const downloadButton = evt.currentTarget;
    const filename = downloadButton.getAttribute("filename");
    const result = await Storage.get(filename, {download: true});
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
        children: item.tag.name
      }
    }
  });
  const overrideItems = (item, index) => ({
    overrides: {
      btn_download: {
        onClick: async (evt) => {
          const fileInfo = await getFile(evt); 
          fileDownload(fileInfo.fileBody, fileInfo.filename);
        }
      },
      btn_view: {
        onClick: async (evt) => {
          const fileInfo = await getFile(evt); 
          window.open(fileInfo.url);
        }
      },
      txt_description: {
        style: {overflowY: "auto"}
      },
      div_tags: {
        children: <TagShowItemCollection items={item?.item?.tags?.items} overrideItems={overrideItemsTag}></TagShowItemCollection>
      },
    }
  });
   
  return (
    <div>
      <Image
        width={"100vw"}
        height="300px"
        position="relative"
        padding="0px 0px 0px 0px"
        src="document_archive.jpeg"
      />
      <DocumentItemCollection 
        alignItems="center"
        items={documents} 
        overrideItems={overrideItems}
      />
    </div>
  );
};

export default Document;

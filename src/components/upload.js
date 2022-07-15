import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { Storage } from "aws-amplify";
import { Upload as UIUpload, AlertSuccess, AlertWarning, TagItemCollection } from "../ui-components";
import * as queries from '../graphql/queries';
import { Document, TagDocument, EmailDelivery } from "../models";
import { DataStore } from '@aws-amplify/datastore';
import { SelectField, Image } from '@aws-amplify/ui-react';
import uuid from 'react-uuid'

const Upload = ({ setAlert, setAlertContent }) => {
    const [fileDataValue, setFileDataValue] = useState();
    const [nameValue, setNameValue] = useState("");
    const [descriptionValue, setDescriptionValue] = useState("");
    const [tags, setTags] = useState([]);
    const [tagsValue, setTagsValue] = useState([]);
    const [categories, setCategories] = useState([]);
    const [categoryIdValue, setCategoryIdValue] = useState("");

    const onNameChange = (evt) => setNameValue(evt.target.value);
    const onDescriptionChange = (evt) => setDescriptionValue(evt.target.value);
    const onCategoryChange = (evt) => setCategoryIdValue(evt.target.value);

    useEffect(() => {
        async function queryTags() {
            const {
                data: { listTags }
            } = await API.graphql({
                query: queries.listTags,
                authMode: 'API_KEY',
            });
            setTags(listTags.items);
        }

        async function queryCategories() {
            const {
                data: { listCategories }
            } = await API.graphql({
                query: queries.listCategories,
                authMode: 'API_KEY',
            });
            setCategories(listCategories.items);
        }

        queryTags();
        queryCategories();
    }, []);


    const uploadFile = async () => {
        if (descriptionValue.trim().length === 0 ||
            nameValue.trim().length === 0 ||
            categoryIdValue.trim() === "" ||
            !fileDataValue) {
            const overrides_alert = {
                Alert: {
                    children: "Please type all required items!"
                }
            };
            
            setAlert(true);
            setAlertContent(<AlertWarning width={"100vw"} overrides={overrides_alert} />);

            return;
        }

        const filename = fileDataValue.name + "." + uuid();
        await Storage.put(filename, fileDataValue, {
            contentType: fileDataValue.type,
        });

        const document = await DataStore.save(
            new Document({
                name: nameValue,
                filename: filename,
                filetype: fileDataValue.type,
                description: descriptionValue,
                categoryID: categoryIdValue,
            })
        );

        tagsValue.map(tag => {
            DataStore.save(
                new TagDocument({
                    tag: tag,
                    document: document,
                })
            );
        });

        const overrides_alert = {
            Alert: {
                children: "Uploaded successfully!"
            }
        }
        setAlert(true);
        setAlertContent(<AlertSuccess width={"100vw"} overrides={overrides_alert} />);


        // generate presigned url for file uploaded
        const data = await API.get('documentversionsapi', '/versions', {
            'queryStringParameters': {
                'filename': filename,
                'all_versions': 'false',
            }
        });
        // console.log("presigned url: " + data[0].url);

        // record email delivery for sending email later
        DataStore.save(
            new EmailDelivery({
                sender: "johnny_liu@miopartners.com",
                receivers: ["im.johnny.liu@gmail.com"],
                subject: "testing",
                html_body: "<html><body><h1>Hello</h1><p>Files just uploaded, you can check it out. <a href=" + data[0].url + " target='_blank'>" + data[0].url + "</a></p></body></html>",
            })
        ); 
    }

    const handleTagCheckboxClick = (event, item) => {
        if (event.target.checked) {
            setTagsValue([...tagsValue, item]);
        } else {
            setTagsValue(tagsValue.filter(i => i !== item));
        }
    }

    const overrideItems = ({ item, _ }) => ({
        onClick: (e) => handleTagCheckboxClick(e, item),
    });

    const category_options = categories.map(item => {
        return <option key={item.id} value={item.id}>{item.name}</option>
    });
    const overrides = {
        div_choose: {
            children: <input type="file" onChange={(event) => setFileDataValue(event.target.files[0])}></input>,
        },
        field_name: {
            onChange: onNameChange,
        },
        field_description: {
            onChange: onDescriptionChange,
        },
        div_category: {
            children:
                <SelectField
                    display="flex"
                    direction="column"
                    justifyContent="center"
                    shrink="0"
                    alignSelf="stretch"
                    objectFit="cover"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    label="Category*"
                    placeholder="Choose one category"
                    size="large"
                    isDisabled={false}
                    labelHidden={false}
                    variation="default"
                    onChange={onCategoryChange}
                >
                    {category_options}
                </SelectField>
        },
        div_tags: {
            children: <TagItemCollection items={tags} overrideItems={overrideItems}></TagItemCollection>
        },
        btn_upload: {
            onClick: uploadFile,
        },
    }

    return (
        <div>
            <Image
                width={"100vw"}
                height="350px"
                position="relative"
                padding="0px 0px px 0px"
                marginBottom={"50px"}
                src="https://content-management-files.canva.com/cdn-cgi/image/f=auto,q=70/c698bb00-5c1b-41bf-80d0-0e26bfe90d67/youtubeeditor1800px.jpg"
            />
            <UIUpload 
                width={"50vw"} 
                overrides={overrides}
                style={{ margin: "0 auto", textAlign: "left" }} />
        </div>
    );
};

export default Upload;

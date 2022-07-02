import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { Storage } from "aws-amplify";
import { FileUpload as UIFileUpload, AlertSuccess, AlertWarning, TagItemCollection } from "../ui-components";
import { FileType } from "../models";
import * as queries from '../graphql/queries';
import { Document, TagDocument, Tag } from "../models";
import { DataStore } from '@aws-amplify/datastore';

const Upload = ({ setAlert, setAlertContent }) => {
    const [fileDataValue, setFileDataValue] = useState();
    const [descriptionValue, setDescriptionValue] = useState("");
    const [filetypeValue, setFiletypeValue] = useState("");
    const [tags, setTags] = useState([]);
    const [tagsValue, setTagsValue] = useState([]);

    const onDescriptionChange = (evt) => setDescriptionValue(evt.target.value);
    const onFileTypeChange = (evt) => setFiletypeValue(evt.target.value);


    useEffect(() => {
        queryTags();
    }, []);

    async function queryTags() {
        const {
            data: { listTags }
        } = await API.graphql({
            query: queries.listTags,
            authMode: 'API_KEY',
        });
        setTags(listTags.items);
    }

    const uploadFile = async () => {
        if (descriptionValue.trim().length === 0 || filetypeValue.trim().length === 0) {
            const overrides_alert = {
                Alert: {
                    children: "Please type all required items!"
                }
            }
            setAlert(true);
            setAlertContent(<AlertWarning width={"100vw"} overrides={overrides_alert} />);

            return;
        }

        await Storage.put(fileDataValue.name, fileDataValue, {
            contentType: fileDataValue.type,
        });

        const document = await DataStore.save(
            new Document({
                filename: fileDataValue.name,
                description: descriptionValue,
                filetype: filetypeValue
            })
        );

        tagsValue.map(tag => {
            console.log(tag.id);
            console.log(document.id);

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

    const overrides = {
        div_choose: {
            children: <input type="file" onChange={(event) => setFileDataValue(event.target.files[0])}></input>,
        },
        field_description: {
            onChange: onDescriptionChange,
        },
        select_type: {
            options: [FileType.CONFIDENTIAL, FileType.PUBLIC],
            onChange: onFileTypeChange,
        },
        div_tags: {
            children: <TagItemCollection items={tags} overrideItems={overrideItems}></TagItemCollection>
        },
        btn_upload: {
            onClick: uploadFile,
        },

    }

    return (<UIFileUpload width={"50vw"} overrides={overrides} />);
};

export default Upload;

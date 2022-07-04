import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { Storage } from "aws-amplify";
import { Upload as UIUpload, AlertSuccess, AlertWarning, TagItemCollection } from "../ui-components";
import * as queries from '../graphql/queries';
import { Document, TagDocument } from "../models";
import { DataStore } from '@aws-amplify/datastore';
import { SelectField } from '@aws-amplify/ui-react';

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
    }, [tags, categories]);

    
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

        await Storage.put(fileDataValue.name, fileDataValue, {
            contentType: fileDataValue.type,
        });

        const document = await DataStore.save(
            new Document({
                name: nameValue,
                filename: fileDataValue.name,
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

    return (<UIUpload width={"50vw"} overrides={overrides} />);
};

export default Upload;

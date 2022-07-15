import React, { useEffect, useState } from "react";
import { Storage } from "aws-amplify";
import { DocumentEdit as UIDocumentEdit, TagItem, AlertSuccess, AlertWarning } from "../ui-components";
import { API } from "aws-amplify";
import * as queries from '../graphql/queries';
import { useParams } from 'react-router-dom';
import { DataStore } from '@aws-amplify/datastore';
import { SelectField, Collection } from '@aws-amplify/ui-react';
import { Document, TagDocument, EmailDelivery } from "../models";
import moment from "moment";

const Edit = ({ setAlert, setAlertContent }) => {

    const { id } = useParams('123');

    const [originDocument, setOriginDocument] = useState(null);
    const [originTags, setOriginTags] = useState([]);
    const [tags, setTags] = useState([]);
    const [categories, setCategories] = useState([]);

    const [categoryIdValue, setCategoryIdValue] = useState(null);
    const [tagsValue, setTagsValue] = useState([]);
    const [descriptionValue, setDescriptionValue] = useState(null);
    const [nameValue, setNameValue] = useState(null);
    const [fileDataValue, setFileDataValue] = useState(null);

    useEffect(() => {


        async function queryDocument() {
            const dataDocument = await DataStore.query(Document, id);
            const dataTags = (await DataStore.query(TagDocument)).filter(td => td.document.id === dataDocument.id);
             
            setTagsValue(dataTags.map(td => td.tag));
            setOriginTags(dataTags.map(td => td.tag));
            setOriginDocument(dataDocument); 
            setCategoryIdValue(dataDocument.categoryID);
            setDescriptionValue(dataDocument.description);
            setNameValue(dataDocument.name);
        }
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
        queryDocument();
        queryTags();
        queryCategories();
    }, []);


    const uploadFile = async () => {
        if (descriptionValue.trim().length === 0 ||
            nameValue.trim().length === 0 ||
            categoryIdValue.trim() === "") {
            const overrides_alert = {
                Alert: {
                    children: "Please type all required items!"
                }
            };

            setAlert(true);
            setAlertContent(<AlertWarning width={"100vw"} overrides={overrides_alert} />);

            return;
        }

        const newDocument = { id: originDocument.id };
        if (fileDataValue !== null) {
            if (fileDataValue.type !== originDocument.filetype) {
                const overrides_alert = {
                    Alert: {
                        children: "Filetype is not match!"
                    }
                };
                setAlert(true);
                setAlertContent(<AlertWarning width={"100vw"} overrides={overrides_alert} />);

                return;
            }

            await Storage.put(originDocument.filename, fileDataValue, {
                contentType: fileDataValue.type,
            });
        }
        if (originDocument.name !== nameValue) {
            newDocument.name = nameValue;
        }
        if (originDocument.description !== descriptionValue) {
            newDocument.description = descriptionValue;
        }
        if (originDocument.categoryID !== categoryIdValue) {
            newDocument.categoryID = categoryIdValue;
        }

        const document = await DataStore.save(
            Document.copyOf(originDocument, updated => {
                if (newDocument.name !== undefined) {
                    updated.name = newDocument.name;
                }
                if (newDocument.description !== undefined) {
                    updated.description = newDocument.description;
                }
                if (newDocument.categoryID !== undefined) {
                    updated.categoryID = newDocument.categoryID;
                }
            })
        );

        // compare tags in originDocument and tagsValue
        const tagsToAdd = tagsValue.filter(ti => !originTags.map(to => to?.id).includes(ti.id));
        const tagsToDelete = originTags.filter(to => !tagsValue.map(ti => ti?.id).includes(to?.id));
        if (tagsToAdd.length > 0) {
            tagsToAdd.map(tag => {
                DataStore.save(new TagDocument({
                    tag: tag,
                    document: document,
                }));
            });
        }
        if (tagsToDelete.length > 0) {
            const deleteItems = (await DataStore.query(TagDocument)).filter(td => td.document.id === originDocument.id && tagsToDelete.map(to => to?.id).includes(td.tag.id)); 
            deleteItems.map(di => DataStore.delete(di));
        }

        const overrides_alert = {
            Alert: {
                children: "Uploaded successfully!"
            }
        }
        setAlert(true);
        setAlertContent(<AlertSuccess width={"100vw"} overrides={overrides_alert} />);

        // generate presigned url for file uploaded
        if (fileDataValue !== null) {
            const data = await API.get('documentversionsapi', '/versions', {
                'queryStringParameters': {
                    'filename': originDocument.filename,
                    'all_versions': false,
                }
            });
            console.log("presigned url: " + data[0].url);
        }

        // record email delivery for sending email later
        DataStore.save(
            new EmailDelivery({
                sender: "johnny_liu@miopartners.com",
                receivers: "im.johnny.liu@gmail.com",
                subject: "testing",
                html_body: "<html><body><h1>Hello</h1></body></html>",
            })
        ); 
    }

    const onNameChange = (evt) => setNameValue(evt.target.value);
    const onDescriptionChange = (evt) => setDescriptionValue(evt.target.value);
    const onCategoryChange = (evt) => setCategoryIdValue(evt.target.value);

    const handleTagCheckboxClick = (event, item) => {
        if (event.target.checked) {
            setTagsValue([...tagsValue, item]);
        } else {
            setTagsValue(tagsValue.filter(i => i.id !== item.id));
        }
    }

    const overrideItems = ({ item, _ }) => ({
        overrides: {
            TagItem: {
                onClick: (e) => handleTagCheckboxClick(e, item),
            },
            check_tag_item: {
                defaultChecked: tagsValue?.map(i => i?.id).includes(item?.id),
            },
        }
    });

    const category_options = categories.map(item => {
        return <option key={item.id} value={item.id} >{item.name}</option>
    });
    const overrides = {
        div_choose: {
            children: <input type="file" onChange={(event) => setFileDataValue(event.target.files[0])}></input>,
        },
        field_name: {
            defaultValue: originDocument?.name, 
            onChange: onNameChange,
        },
        field_description: {
            defaultValue: originDocument?.description,
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
                    value={categoryIdValue}
                >
                    {category_options}
                </SelectField>
        },
        div_tags: {
            children: 
                <Collection
                    type="grid"
                    searchPlaceholder="Search..."
                    templateColumns="1fr 1fr"
                    autoFlow="row"
                    alignItems="stretch"
                    justifyContent="stretch"
                    items={tags || []}
                >
                    {(item, index) => (
                        <TagItem
                            tag={item}
                            width="auto"
                            margin="0 25px 0 0"
                            key={item.id}
                            {...(overrideItems && overrideItems({ item, index }))}
                        ></TagItem>
                    )}
                </Collection>
        },
        btn_submit: {
            onClick: uploadFile,
        },
    }

    return (
        <div>
            <UIDocumentEdit
                width={"50vw"}
                overrides={overrides}
                style={{ margin: "0 auto", textAlign: "left" }} />
        </div>
    );
};

export default Edit;

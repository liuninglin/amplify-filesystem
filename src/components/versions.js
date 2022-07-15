import { Amplify, API } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { VersionItem } from '../ui-components';
import { Image, Collection } from "@aws-amplify/ui-react";
import { useParams } from 'react-router-dom';

const Versions = () => {
    const { filename } = useParams()

    const [versions, setVersions] = useState(null);

    useEffect(() => {
        const listVersions = async () => {
            const data = await API.get('documentversionsapi', '/versions', {
                'queryStringParameters': {
                    'filename': filename,
                    'all_versions': 'true',
                }
            });
            setVersions(data);
            console.log(data);
        }

        listVersions();
    }, []);


    const overrideItems = (item, index) => ({
        overrides: {
            btn_view: {
                onClick: async (evt) => {
                    window.open(item?.item?.url);
                }
            },
            txt_version: {
                children: item?.item?.VersionId
            },
            txt_lastmodifiedtime: {
                children: item?.item?.LastModified
            },
        }
    });

    return (
        <div>
            <Collection
                type="list"
                direction="column"
                alignItems="center"
                items={versions || []}
            >
                {(item, index) => (
                    <VersionItem
                        key={item.VersionId}
                        {...(overrideItems && overrideItems({ item, index }))}
                    ></VersionItem>
                )}
            </Collection>
        </div>
    );
}

export default Versions;
import React, { useState } from "react";
import { Storage } from "aws-amplify";
import { FileUpload as UIFileUpload, AlertSuccess } from "../ui-components";

const Upload = ({ setAlert, setAlertContent }) => {
    const [fileData, setFileData] = useState([]);

    const uploadFile = async () => {
        await Storage.put(fileData.name, fileData, {
            contentType: fileData.type,
        });

        const overrides_alert = {
            Alert: {
                children: "Uploaded successfully!"
            }
        }
        setAlert(true);
        setAlertContent(<AlertSuccess width={"100vw"} overrides={overrides_alert} />);

    }

    const overrides = {
        div_choose: {
            children: <input type="file" onChange={(event) => setFileData(event.target.files[0])}></input>,
        },
        btn_upload: {
            onClick: uploadFile,
        },
    }

    return (<UIFileUpload width={"50vw"} overrides={overrides} />);
};

export default Upload;

import React, { useEffect, useState } from "react";
import { Amplify, Storage } from "aws-amplify";
// custom hook to get the current pathname in React
import { FileUpload as UIFileUpload } from "../ui-components";

const Upload = () => {
    const [fileData, setFileData] = useState([]);
    const [fileStatus, setFileStatus] = useState(false);
    const uploadFile = async () => {
        const result = await Storage.put(fileData.name, fileData, {
            contentType: fileData.type,
        });
        setFileStatus(true);
        console.log("uploaded result: " + result);
    }

    return (
        <div>
            <div>
                <input type="file" onChange={(event) => setFileData(event.target.files[0])}></input>
                <button onClick={uploadFile}>Upload</button>
            </div>

            {fileStatus ? 'Uploaded successfully' : ''}
        </div>
        
        // <UIFileUpload width={"50vw"} margin={"auto"} marginBottom={"50px"}></UIFileUpload>
    );
};

export default Upload;

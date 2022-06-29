import React, { useEffect, useState } from "react";
import { Amplify, Storage } from "aws-amplify";
import { AmplifyProvider, Authenticator, Image, useTheme, View } from "@aws-amplify/ui-react";
import { NavBar, studioTheme } from './ui-components';
import awsconfig from "./aws-exports";
import logo from './logo.svg';
import "@aws-amplify/ui-react/styles.css";
import './App.css';

Amplify.configure({
  ...awsconfig,
});

function App() {
  const components = {
    Header() {
      const { tokens } = useTheme();

      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Image
            alt="Amplidoc logo"
            src="logo192.png"
            height="150px"
          />
        </View>
      )
    }
  };

  const [fileData, setFileData] = useState([]);
  const [fileStatus, setFileStatus] = useState(false);
  const [s3DownloadLinks, setS3DownloadLinks] = useState([]);

 

  
  
  
  const uploadFile = async () => {
    const result = await Storage.put(fileData.name, fileData, {
      contentType: fileData.type,
    });
    setFileStatus(true);
    console.log("uploaded result: " + result);
  }

  async function listObjectsFromS3() {
    const s3Objects = await Storage.list("");
    s3Objects.map(async (item) => {
      let downloadLink = await generateDownloadLinks(item.key);
      setS3DownloadLinks((s3DownloadLinks => [
        ...s3DownloadLinks,
        downloadLink,
      ]));
    });
  }

  async function generateDownloadLinks(fileKey) {
    const result = await Storage.get(fileKey, {download: true});
    return downloadBlob(result.Body, "filename");
  }

  async function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    return a;
  } 

  useEffect(() => {
    listObjectsFromS3();
  }, []);
  

  return (
    <AmplifyProvider theme={studioTheme}>
      <Authenticator variation="modal" components={components}>
        {
          ({ signOut, user }) => 
            (
              <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    My App
                  </p>
                  <h1>Hello {user.username}</h1>
                  <button onClick={signOut}>Sign out</button>
                  
                  {
                    s3DownloadLinks.map((item, index) => (
                      <div key={index}>
                        <a href={item} target="_blank" download="">
                          Link {index}
                        </a>
                      </div>
                    )) 
                  }

                  <div>
                    <input type="file" onChange={(event) => setFileData(event.target.files[0])}></input>
                    <button onClick={uploadFile}>Upload</button>
                  </div>

                  {fileStatus ? 'Uploaded successfully' : ''} 
                </header>
              </div>
            )
        }
      </Authenticator>
    </AmplifyProvider>

  );
}

export default App;

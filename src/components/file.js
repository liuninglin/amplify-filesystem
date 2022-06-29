import React, { useEffect, useState } from "react";
import { Amplify, Storage } from "aws-amplify";

const File = () => {

  const [s3DownloadLinks, setS3DownloadLinks] = useState([]);

  async function listObjectsFromS3() {
    const s3Objects = await Storage.list("");
    s3Objects.map(async (item) => {
      let downloadLink = await generateDownloadLinks(item.key);
      setS3DownloadLinks((s3DownloadLinks => [
        ...s3DownloadLinks,
        {
          filename: item.key,
          link: downloadLink, 
        },
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
    <div>
      {
        s3DownloadLinks.map((item, index) => (
          <div key={index}>
            <a href={item.link} target="_blank" download="">
              {item.filename}
            </a>
          </div>
        ))
      }
    </div>
  );
};

export default File;

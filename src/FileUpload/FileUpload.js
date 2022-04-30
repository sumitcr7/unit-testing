import axios from "axios";
import React, { useState } from "react";

const UserDetail = ({ onUpdate }) => {
  const [files, setFiles] = useState([]);
  const [data, setData] = useState("");

  const onUploadFile = async () => {
    for (let i = 0; i < files.length; i += 1) {
      const { file } = files[i];
      const formData = new FormData();
      formData.append("files", file);
      // TODO
      // facing some issues while mocking axios response
      await axios({
        headers: {
          "Content-Type": "multipart/form-data",
        },
        url: "http://localhost:3030/upload",
        method: "post",
        data: formData,
        onUploadProgress: (resp) => {
          console.log(data);
        },
      })
        .then((resp) => {
          setData(resp.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    onUpdate(true);
  };
  return (
    <div>
      <p>Get user details</p>
      <p>{data}</p>
      <input
        placeholder="upload"
        type="file"
        onChange={(e) => {
          setFiles((prev) => [...prev, e.target.files]);
        }}
      />

      <button onClick={onUploadFile}>upload files</button>
    </div>
  );
};

export default UserDetail;

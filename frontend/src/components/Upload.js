import React, { useState } from "react";
import { uploadFile, fetchGoogleSheet } from "../services/api";

function Upload({ setUrls }) {
  const [file, setFile] = useState(null);
  const [sheetUrl, setSheetUrl] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file) return alert("Select file");

    const res = await uploadFile(file);
    setUrls(res.data.urls);
  };

  const handleGoogleSheet = async (e) => {
    e.preventDefault();

    if (!sheetUrl) return alert("Enter URL");

    const res = await fetchGoogleSheet(sheetUrl);
    setUrls(res.data.urls);
  };

  return (
    <div>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit">Upload File</button>
      </form>

      <br />

      <form onSubmit={handleGoogleSheet}>
        <input
          type="text"
          placeholder="Google Sheet URL"
          value={sheetUrl}
          onChange={(e) => setSheetUrl(e.target.value)}
        />
        <button type="submit">Load Sheet</button>
      </form>
    </div>
  );
}

export default Upload;
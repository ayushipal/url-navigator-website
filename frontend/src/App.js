import React, { useState } from "react";
import Upload from "./components/Upload";

function App() {
  const [urls, setUrls] = useState([]);
  const [index, setIndex] = useState(0);
  const [showViewer, setShowViewer] = useState(false);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>🌐 URL Navigator</h1>

      <Upload
        setUrls={(data) => {
          setUrls(data);
          setIndex(0);
          setShowViewer(true); // show iframe when data comes
        }}
      />

      {showViewer && urls.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          
          {/* 🔴 CLOSE BUTTON */}
          <button
            onClick={() => {
              setShowViewer(false);
              setUrls([]);
              setIndex(0);
            }}
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "8px 12px",
              border: "none",
              cursor: "pointer",
              marginBottom: "10px",
            }}
          >
            ❌ Close
          </button>

          <br />

          {/* 🌐 IFRAME */}
          <iframe
            src={urls[index]}
            width="80%"
            height="400px"
            title="viewer"
            style={{ border: "1px solid #ccc" }}
          />

          <div style={{ marginTop: "10px" }}>
            <button
              onClick={() => setIndex(Math.max(index - 1, 0))}
            >
              Prev
            </button>

            <button
              onClick={() =>
                setIndex(Math.min(index + 1, urls.length - 1))
              }
            >
              Next
            </button>
          </div>

        </div>
      )}
    </div>
  );
}

export default App;
import React from "react";

function Viewer({ url }) {
  return (
    <div className="viewer">
      <iframe
        src={url}
        title="website"
        width="100%"
        height="500px"
      ></iframe>
    </div>
  );
}

export default Viewer;
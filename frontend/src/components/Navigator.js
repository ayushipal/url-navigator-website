import React from "react";

function Navigator({ currentIndex, setCurrentIndex, total }) {
  return (
    <div>
      <button
        disabled={currentIndex === 0}
        onClick={() => setCurrentIndex(currentIndex - 1)}
      >
        ⬅ Previous
      </button>

      <span> {currentIndex + 1} / {total} </span>

      <button
        disabled={currentIndex === total - 1}
        onClick={() => setCurrentIndex(currentIndex + 1)}
      >
        Next ➡
      </button>
    </div>
  );
}

export default Navigator;
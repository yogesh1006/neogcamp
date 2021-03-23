import React, { useState } from "react";

function Figma() {
  const [size, setSize] = useState(8);

  let handleSize = (e) => {
    console.log(e);
    e.preventDefault();
    if (e.target.name == "add") {
      setSize((prev) => prev + 8);
    } else {
      if (size > 8) {
        setSize((prev) => prev - 8);
      }
    }
  };
  return (
    <div>
      <h1>Figma</h1>
      <textarea
        name="textarea"
        style={{
          fontSize: `${size}px`,
          height: "100px",
          width: "100%",
          resize:"none",
          marginBottom: "1rem",
        }}
      ></textarea>
      <br />
      <button name="add" onClick={handleSize}>
        +
      </button>{" "}
      {size}{" "}
      <button name="sub" onClick={handleSize}>
        -
      </button>
    </div>
  );
}

export default Figma;

import React, { useState } from "react";

function Success() {
  const [toast, settoast] = useState("none");
  const [hide, setHide] = useState("block");

  let showToast = () => {
    settoast("block");
    setHide("none");
  };

  let hideToast = () => {
    settoast("none");
    setHide("block");
  };
  return (
    <div>
      <h1>Toast</h1>
      <div
        className="success"
        style={{
          width: "300px",
          border: "2px solid green",
          padding: "1rem",
          borderRadius: "5px",
          color:"green"
        }}
      >
        <div style={{ display: toast }}>
          <p>Hi ! This is Succces Message!</p>
          <button onClick={hideToast}>Hide Toast</button>
        </div>
        <button style={{ display: hide }} onClick={showToast}>
          Show Toast
        </button>
      </div>
    </div>
  );
}

export default Success;

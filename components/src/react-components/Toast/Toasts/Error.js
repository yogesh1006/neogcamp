import React, { useState } from "react";

function Error() {
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
        style={{
          width: "300px",
          border: "1px solid red",
          padding: "1rem",
          borderRadius: "5px",
          color:"red",
        }}
      >
        <div style={{ display: toast }}>
          <p>Hi ! This is Error Message!</p>
          <button onClick={hideToast}>Hide Toast</button>
        </div>
        <button style={{ display: hide }} onClick={showToast}>
          Show Toast
        </button>
      </div>
    </div>
  );
}

export default Error;

import React, { useState } from "react";
import "./ToggleDarkMode.css";


const darktheme={
    backgroundColor:"black",
    color:"white"
}
const lighttheme={
    backgroundColor:"white",
    color:"black"
}

function ToggleDarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  const changeBgToDark = () => {
    setDarkMode(true);
  };

//   const getdivStyle = () => {
//     if (darkMode) {
//       console.log(darkMode);
//       return {
//         backgroundColor: "black",
//         color: "white",
//       };
//     }else {
//         return{
//             backgroundColor: "white",
//             color:"black",
//         }
     
//     };
//   };
  return (
    <div>
      <div className="dark" style={darkMode ? darktheme : lighttheme}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ullam
          corrupti eum expedita aperiam temporibus obcaecati odio deserunt
          pariatur, rerum dolorem assumenda aliquid voluptatem similique
          cupiditate animi minima? Perferendis, error!
        </p>
        <button onClick={changeBgToDark}> {darkMode ? "Click for light mode" : "Click for dark mode"}</button>
      </div>
    </div>
  );
}

export default ToggleDarkMode;

import React, { useState } from "react";
import Home from "./tabs/Home"
import About from "./tabs/About"
import Profile from "./tabs/Profile"

export default function App() {


  const [display, setDisplay] = useState("none");
  const [about, setAbout] = useState("none");
  const [profile, setProfile] = useState("none");


  function output(e) {
    if (e.target.name === "home") {
      setDisplay("block");
      setAbout("none");
      setProfile("none");
    } else if (e.target.name === "about") {
      setDisplay("none");
      setAbout("block");
      setProfile("none");
    } else {
      setDisplay("none");
      setAbout("none");
      setProfile("block");
    }
  }
  return (
    <div className="switch-tabs">
        <h1>Switch Tabs</h1>
    <div className="tabs">
      <button name="home" onClick={output}>
        Home
      </button>
      <button name="about" onClick={output}>
        About
      </button>
      <button name="profile" onClick={output}>
        Profile
      </button>
      </div>
      <br/>
      <div style={{}}>
      <div style={{ display: display }}>
        <Home />
      </div>
      <div style={{ display: about }}>
        <About />
      </div>
      <div style={{ display: profile }}>
        <Profile />
      </div>
      </div>
    </div>
  );
}

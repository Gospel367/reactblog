import React, { useState } from "react";

export default function Header({ username, location }) {
  const [infotoggle, setInfotoggle] = useState(`Hi ${username}`);

  function toggleclick() {
    setInfotoggle(`How is ${location} today?`);
  }

  function normal() {
    setInfotoggle(`Hi ${username}`);
  }

  return (
    <header className="header">
      <h2>The Globalites Blog</h2>
      <div className="userbox">
        <p onMouseEnter={toggleclick} onMouseLeave={normal}>
          {infotoggle}
        </p>
      </div>

      <p>Getting the word out fast enough.....</p>

      <ul className="navbar">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a>Services</a>
        </li>
        <li>
          <a>About Us</a>
        </li>
        <li>
          <a>Contact Us</a>
        </li>
        <li>
          <a>Docs</a>
        </li>
      </ul>
      <br></br>
      <br></br>
      <br></br>
    </header>
  );
}

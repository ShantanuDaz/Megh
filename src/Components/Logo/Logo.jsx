import React from "react";
import logo from "../../ICON.png";
import "./Logo.css";
const Logo = () => {
  return (
    <div id="logo">
      <img src={logo} alt="LOGO" />
      <span>MEGH</span>
    </div>
  );
};

export default Logo;

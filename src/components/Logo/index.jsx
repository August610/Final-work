import React from "react";
import "./styles.css";
import logo from './img/logo_1.png';

export const Logo = ({className}) => {
  return (
    <a href="/" className={className ? className: "logo"}>
        <img src={logo} alt="logo" className="logo__pic" />      
    </a>
  );
};

import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Insta from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="socialLinks">
          <img src={Github} alt="" />
          <img src={Insta} alt="" />
          <img src={LinkedIn} alt="" />
        </div>
        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="blur footer1-blur"></div>
      <div className="blur footer2-blur"></div>
    </div>
  );
};

export default Footer;

import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="d-flex align-item-center flex-direction-row">
          <span>gokulraj74627@gmail.com | </span>
          <span>gokulrajprince@gmail.com</span>
        </div>
        <div className="f-icons">
          <a href="https://www.linkedin.com/in/gokul-raj-m-97008b228/">
            <LinkedIn color="white" size={"3rem"} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100027056631054">
            <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/GokulRajprince">
            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

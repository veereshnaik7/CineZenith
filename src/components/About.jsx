import React from "react";
import myImg from "../assets/images/41.jpg";
import { NavLink } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const About = () => {
  
  return (
    <div className="main-div" id="main-div">
      
      <div id="about">
      <div className="e-card playing">
        
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="infotop">
          <img className="my-img" src={myImg} alt="img" />
          <br />
          <span className="desgination">UI/UX Developer</span>
          <br />
          <div className="name">Ramavath Veeresh Naik</div>
          <br />
          <div className="social-media">
            <NavLink
              className="social-media-icons"
              target="_blank"
              href="https://www.linkedin.com/in/veeresh-naik-22003127a/"
            >
              <FaLinkedin />
            </NavLink>
            <NavLink
              className="social-media-icons"
              target="_blank"
              href="https://github.com/veereshnaik7"
            >
              <FaGithub />
            </NavLink>
            <NavLink
              className="social-media-icons"
              target="_blank"
              href="https://www.instagram.com/veereshnaik__/?igshid=YTQwZjQ0NmI0OA%3D%3D"
            >
              <FaInstagramSquare />
            </NavLink>
            <NavLink
              className="social-media-icons"
              target="_blank"
              href="https://www.facebook.com/veeresh.naik.5680"
            >
              <FaFacebook />
            </NavLink>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;

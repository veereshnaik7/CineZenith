import React from "react";
import {  NavLink } from "react-router-dom";
import { IoLogoMedium } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdResetTv } from "react-icons/md";

const Footer = () => {
  
  return (
    <div className="main-div">
      <div className="footer">
        <div id="suggest">
          <div className="suggest">
            <NavLink to="/">
              <div className="router_icon">
                <h5>cine zenith(the largest peak of cinemas)</h5>
              </div>
            </NavLink>

            <p>what do we suggest for you is.?</p>
            <NavLink to="/movies">
              <div className="router_icon">
                <IoLogoMedium /> Movies
              </div>
            </NavLink>
            <NavLink to="/tv">
              <div className="router_icon">
                <MdResetTv /> 
                TV Shows
              </div>
            </NavLink>
            <NavLink to="/people">
              <div className="router_icon">
                <GoPeople /> Popular characters
              </div>
            </NavLink>
          </div>
          <div className="support">
            <p>you can contact me here.?</p>
            <div className="info">
              <a href="mailto:jerryveeru1@gmail.com">jerryveeru1@gmail.com </a>
              <a href="callto:7702513376"> +91 7702513376</a>
            </div>
          </div>
        </div>
        <p className="fallow">you can fallow us on...</p>
        <div className="social-media">
            <NavLink
              className="social-media-icons"
              target="_blank"
              to="https://www.linkedin.com/in/veeresh-naik-22003127a/"
            >
              <FaLinkedin />
            </NavLink>
            <NavLink
              className="social-media-icons"
              target="_blank"
              to="https://github.com/veereshnaik7/10kcoders-assignments"
            >
              <FaGithub />
            </NavLink>
            <NavLink
              className="social-media-icons"
              target="_blank"
              to="https://www.instagram.com/veereshnaik__/?igshid=YTQwZjQ0NmI0OA%3D%3D"
            >
              <FaInstagramSquare />
            </NavLink>
            <NavLink
              className="social-media-icons"
              target="_blank"
              to="https://www.facebook.com/veeresh.naik.5680"
            >
              <FaFacebook />
            </NavLink>
          </div>
      </div>
    </div>
  );
};

export default Footer;

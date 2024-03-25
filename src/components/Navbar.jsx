import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { MdOutlineTrendingUp } from "react-icons/md";
import { IoLogoMedium } from "react-icons/io5";
import { MdResetTv } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlinePlaylistAddCheck } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { useSelector } from "react-redux";
import { FaRegHeart } from "react-icons/fa";
import "../css/navbar.css";

const Navbar = () => {
  const [open, setopen] = useState(false);
  const [view, setview] = useState({ display: "none" });

  const isAuth = useSelector((state) => state.cineZenithSlice.isAuth);

  const toggle = () => {
    setopen(!open);
    if (!open) {
      setview({ display: "block" });
    } else {
      setview({ display: "none" });
    }
  };

  return (
    <div className="main-container">
      <motion.div
        animate={{
          width: open ? "150px" : "60px",
          transition: {
            duration: "10s",
            type: "spring",
            damping: 12,
          },
        }}
        className="sidebar"
      >
        <div className="logo">
          {open && <div className="brand_name">CineZenith</div>}
          <div className="bars" onClick={toggle}>
            <FaBars />
          </div>
        </div>

        <section className="routes">
          {isAuth && (
            <>
              <NavLink to="/" className="route_item">
                <div className="router_icon">
                  <FaHome />
                </div>
                <div style={view} className="link_text">
                  Home
                </div>
              </NavLink>
              <NavLink to="/trending" className="route_item">
                <div className="router_icon">
                  <MdOutlineTrendingUp />
                </div>
                <div style={view} className="link_text">
                  Trending
                </div>
              </NavLink>
              <NavLink to="/movies" className="route_item">
                <div className="router_icon">
                  <IoLogoMedium />
                </div>
                <div style={view} className="link_text">
                  Movies
                </div>
              </NavLink>
              <NavLink to="/tv" className="route_item">
                <div className="router_icon">
                  <MdResetTv />
                </div>
                <div style={view} className="link_text">
                  TV
                </div>
              </NavLink>
              <NavLink to="/people" className="route_item">
                <div className="router_icon">
                  <GoPeople />
                </div>
                <div style={view} className="link_text">
                  persons
                </div>
              </NavLink>
              <NavLink to="/watchlist" className="route_item">
                <div className="router_icon">
                  <MdOutlinePlaylistAddCheck />
                </div>
                <div style={view} className="link_text">
                  watchlist
                </div>
              </NavLink>
              <NavLink to="/favourites" className="route_item">
                <div className="router_icon">
                  <FaRegHeart />
                </div>
                <div style={view} className="link_text">
                  Favourites
                </div>
              </NavLink>

              <NavLink to="/about" className="route_item">
                <div className="router_icon">
                  <BsFillPersonFill />
                </div>
                <div style={view} className="link_text">
                  About
                </div>
              </NavLink>
            </>
          )}
        </section>
      </motion.div>
    </div>
  );
};

export default Navbar;

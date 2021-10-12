import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import sidebarBackground from "../../images/sidebar-background.png";
function Sidebar() {
  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__recentItemHash">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={sidebarBackground} alt="" />
        <Avatar
          src="https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/199716171_3812342788894365_6007568025747142072_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=dO0igKRF-H0AX_f2igb&tn=NxQ11tCv_94WiCRE&_nc_ht=scontent-vie1-1.xx&oh=c73b89ce420ff2708c221b6fe57bd2ff&oe=618BEBC6"
          className="sidebar__avatar"
        />
        <h2>P-Holl Ákos</h2>
        <h4>Student at Nyugat-Magyarországi Egyetem</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Connections</p>
          <p className="sidebar__statNumber">34</p>
        </div>
        <div className="sidebar__stat">
          <p>Who viewed your profile</p>
          <p className="sidebar__statNumber">8</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("programming")}
        {recentItem("react")}
        {recentItem("spring-boot")}
        {recentItem("java")}
        {recentItem("web-development")}
      </div>
    </div>
  );
}

export default Sidebar;

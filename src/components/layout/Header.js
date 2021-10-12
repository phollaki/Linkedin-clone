import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import HeaderComponent from "../layout-parts/HeaderComponent";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import TextsmsIcon from "@mui/icons-material/Textsms";
import NotificationsIcon from "@mui/icons-material/Notifications";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.freepnglogos.com/uploads/linkedin-logo-design-30.png"
          alt="linkedin icon"
        />

        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__right">
        <HeaderComponent Icon={HomeIcon} title="Home" />
        <HeaderComponent Icon={PeopleAltIcon} title="My Network" />
        <HeaderComponent Icon={CardTravelIcon} title="Jobs" />
        <HeaderComponent Icon={TextsmsIcon} title="Messages" />
        <HeaderComponent Icon={NotificationsIcon} title="Notifications" />
        <HeaderComponent
          avatar="https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/199716171_3812342788894365_6007568025747142072_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=dO0igKRF-H0AX_f2igb&tn=NxQ11tCv_94WiCRE&_nc_ht=scontent-vie1-1.xx&oh=c73b89ce420ff2708c221b6fe57bd2ff&oe=618BEBC6"
          title="Me"
        />
      </div>
    </div>
  );
}

export default Header;

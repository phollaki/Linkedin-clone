import { Avatar } from "@mui/material";
import React from "react";
import "./HeaderComponent.css";
function HeaderComponent({ Icon, title, avatar }) {
  return (
    <div className="headerComponent">
      {Icon && <Icon className="headerComponent__icon" />}
      {avatar && <Avatar className="headerComponent__avatar" src={avatar} />}
      <h3 className="headerComponent__title">{title}</h3>
    </div>
  );
}

export default HeaderComponent;

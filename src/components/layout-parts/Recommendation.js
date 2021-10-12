import { Avatar } from "@mui/material";
import React from "react";
import "./Recommendation.css";
function Recommendation({ avatar, title, description }) {
  return (
    <div className="recommendation">
      <div className="recommendation__top">
        {avatar && <Avatar className="recommendation__avatar" src={avatar} />}

        <div className="recommendation__title">
          {title && <h2 className="recommendation__companyName">{title}</h2>}
          {description && (
            <p className="recommendation__companyDescr">{description}</p>
          )}
          <button className="recommendation__button">+ Follow</button>
        </div>
      </div>
    </div>
  );
}

export default Recommendation;

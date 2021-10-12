import { Avatar } from "@mui/material";
import React from "react";
import "./Feed.css";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Post from "../layout-parts/Post";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SendIcon from "@mui/icons-material/Send";
function Feed() {
  const sendPostHandler = () => {
    console.log("sended");
  };
  return (
    <div className="feed">
      <div className="feed__top">
        <div className="feed__top__input">
          <Avatar
            src="https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/199716171_3812342788894365_6007568025747142072_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=dO0igKRF-H0AX_f2igb&tn=NxQ11tCv_94WiCRE&_nc_ht=scontent-vie1-1.xx&oh=c73b89ce420ff2708c221b6fe57bd2ff&oe=618BEBC6"
            className="feed__top__avatar"
          />
          <input
            type="text"
            className="feed__top__inputField"
            placeholder="Start a post"
          ></input>
          <SendIcon
            className="feed__top__inputSend"
            onClick={sendPostHandler}
          />
        </div>

        <div className="feed__top__actions">
          <div className="feed__top__action">
            <AddPhotoAlternateIcon color="primary" />
            <p className="feed__top__actionsText">Photo</p>
          </div>
          <div className="feed__top__action">
            <YouTubeIcon color="success" />
            <p className="feed__top__actionsText">Video</p>
          </div>
          <div className="feed__top__action">
            <EventAvailableIcon style={{ color: "orange" }} />
            <p className="feed__top__actionsText">Event</p>
          </div>
          <div className="feed__top__action">
            <AssignmentIcon style={{ color: "red" }} />
            <p className="feed__top__actionsText">Write article</p>
          </div>
        </div>
      </div>
      <div className="feed__line">
        <hr className="feed__lineHr" />
        <span className="feed__lineText">Sort by:</span>
        <span className="feed__sortBy">
          Top <ExpandMoreIcon />
        </span>
      </div>
      <div className="feed__post">
        <Post
          avatar="https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
          title="My days at work! :)"
          name="Don Joe"
          description="Senior Lecturer at Eötvös Loránd University Faculty of Informatics ELTE IK"
          picture="https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/getty_1075599562_hpy86b.jpg"
          date="10d"
        />
      </div>
      <div className="feed__post">
        <Post
          avatar="data:image/png;base64,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"
          title="New MacBook Air 💻"
          name="Apple"
          description="Company • Consumer Electronics"
          picture="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-og-202011?wid=600&hei=315&fmt=jpeg&qlt=95&.v=1604278672000"
          date="12d"
        />
      </div>
      <div className="feed__post">
        <Post
          avatar="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAALVBMVEXyUCJ/ugAApO//uQD////yTh/zVy2EvRYWp/D/uxbyTBvzXziJvyQkq/D/viRJQpTmAAABDUlEQVR4nO3PyRHCQBAEwRHo5vDfXD1ZC5oYyHKgIqtSLev8aZtixYCEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIQdhUuq81vCNdZjED63WDX/eoT9I+wfYf8I+0fYv9pjvYbt+4hVt1j7IDzusQgJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQn/WXgB6/1wCkBWrdwAAAAASUVORK5CYII="
          title="Windows 11 release on Oct 5!"
          name="Microsoft"
          description="Computer Software Redmond, Washington"
          picture="https://image.cnbcfm.com/api/v1/image/106901172-1624474214482-106901172-1624408705315-gettyimages-491551484-MS_WINDOWS_10.jpg?v=1630387088"
          date="12d"
        />
      </div>
    </div>
  );
}

export default Feed;

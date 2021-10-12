import React, { useState } from "react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import CommentIcon from "@mui/icons-material/Comment";
import IosShareIcon from "@mui/icons-material/IosShare";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Post.css";
import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";
import { Avatar } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { styled } from "@mui/material/styles";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
function Post({ avatar, name, description, date, title, picture, likes }) {
  const [follow, setFollow] = useState(false);
  const followHandler = () => {
    setFollow(!follow);
    console.log(follow);
  };
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 11,
      padding: 15,
      marginLeft: 15,
      borderRadius: 15,
    },
  }));
  return (
    <div className="post">
      <div className="post__top">
        <div className="post__topDescription">
          <div>
            {avatar && <Avatar className="post__avatar" src={avatar} />}
          </div>
          <div>
            {name && <h2 className="post__name">{name}</h2>}
            {description && <p className="post__description">{description}</p>}
            {date && <p className="post__date">{date}</p>}
          </div>
        </div>
        <div className="post__follow">
          <button className="post__followBtn" onClick={followHandler}>
            {follow ? (
              <div className="post__followBtnContent">
                <CheckIcon style={{ fontWeight: "bold", fontSize: "17px" }} />
                Following
              </div>
            ) : (
              <div className="post__followBtnContent">
                <AddIcon style={{ fontWeight: "bold", fontSize: "17px" }} />{" "}
                Follow
              </div>
            )}
          </button>
        </div>
      </div>
      <div className="post__body">
        {title && <p className="post__title">{title}</p>}
        {picture && <img src={picture} className="post__image" alt="post" />}
      </div>
      <div className="post__actions">
        <LightTooltip
          title={
            <>
              <ThumbUpAltIcon style={{ color: "#0a66c2" }} />
              <LightbulbIcon style={{ color: "#FFD320" }} />
              <FavoriteIcon style={{ color: "red" }} />
              <EmojiEmotionsIcon style={{ color: "#E395FC" }} />
            </>
          }
          iconClassName="post__actionTooltip"
        >
          <div className="post__action">
            <ThumbUpAltIcon />
            <p className="post__actionText">Like</p>
          </div>
        </LightTooltip>
        <div className="post__action">
          <CommentIcon />
          <p className="post__actionText">Comment</p>
        </div>
        <div className="post__action">
          <IosShareIcon />
          <p className="post__actionText">Share</p>
        </div>
        <div className="post__action">
          <SendIcon />
          <p className="post__actionText">Send</p>
        </div>
      </div>
    </div>
  );
}

export default Post;

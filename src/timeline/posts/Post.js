import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
const Post = ({user,image,like,timestamp}) => {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
          {user} • <span>{timestamp}</span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post__image">
        <img src={image} />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconMain">
            <FavoriteBorderIcon className="postIcon" />
            <ChatBubbleIcon className="postIcon" />
            <TelegramIcon className="postIcon" />
          </div>
          <div className="post__iconSave">
            <BookmarkBorderIcon />
          </div>
        </div>
        Like By {like} people
      </div>
    </div>
  );
};

export default Post;

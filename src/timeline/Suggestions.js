import React from "react";
import "./Suggestions.css";
import { Avatar } from "@mui/material";
const Suggestions = () => {
  return (
    <div className="suggestions">
      <div className="suggestions__title">Suggestions for you</div>
      <div className="suggestions_usernames">
        {/* left */}
        <div className="username__left">
          <span className="avatar">
            <Avatar>K</Avatar>
          </span>
          <div className="username__info">
            <span className="username">kuldeep</span>
            <span className="relation">New to Instagram</span>
          </div>
        </div>
        {/* right */}
        <button className="follow__button">Follow</button>
      </div>
      <div className="suggestions_usernames">
        {/* left */}
        <div className="username__left">
          <span className="avatar">
            <Avatar>K</Avatar>
          </span>
          <div className="username__info">
            <span className="username">kuldeep</span>
            <span className="relation">New to Instagram</span>
          </div>
        </div>
        {/* right */}
        <button className="follow__button">Follow</button>
      </div>
      <div className="suggestions_usernames">
        {/* left */}
        <div className="username__left">
          <span className="avatar">
            <Avatar>K</Avatar>
          </span>
          <div className="username__info">
            <span className="username">kuldeep</span>
            <span className="relation">New to Instagram</span>
          </div>
        </div>
        {/* right */}
        <button className="follow__button">Follow</button>
      </div>
      <div className="suggestions_usernames">
        {/* left */}
        <div className="username__left">
          <span className="avatar">
            <Avatar>K</Avatar>
          </span>
          <div className="username__info">
            <span className="username">kuldeep</span>
            <span className="relation">New to Instagram</span>
          </div>
        </div>
        {/* right */}
        <button className="follow__button">Follow</button>
      </div>
    </div>
  );
};

export default Suggestions;

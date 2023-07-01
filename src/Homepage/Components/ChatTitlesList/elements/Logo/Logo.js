import React from "react";
import "./Logo.css";
import LogoImg from "../../../../../images/logo.png";
import { useDispatch } from "react-redux";
import { changeCurrentChat } from "../../../../../store/Reducers/CurrentChatReducer";

const Logo = () => {
  const dispatch = useDispatch();

  return (
    <div className="chat-list-logo">
      <div className="chat-list-logo-header">
        <img src={LogoImg} alt="" />
        <div>Chat GPT</div>
      </div>

      <div
        className="new-chat"
        onClick={() => dispatch(changeCurrentChat("new-chat"))}>
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-4 w-4"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        New chat
      </div>
    </div>
  );
};

export default Logo;

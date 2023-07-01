import React, { useState } from "react";
import "./Homepage.css";
import ChatTitlesList from "./Components/ChatTitlesList/ChatTitlesList";
import ChatGround from "./Components/ChatGround/ChatGround";
import { useSelector } from "react-redux";

const Homepage = () => {
  const chat = useSelector((state) => state.chat);
  const currentChatId = useSelector((state) => state.currentChat);
  let index;
  for (let i = 0; i < chat.length; i++) {
    if (chat[i].id === currentChatId) {
      index = i;
    }
  }
  const [mediaToggle, setMediaToggle] = useState(false);

  const handleMediaBtn = () => {
    if (!mediaToggle) {
      const toggle = document.querySelector(".chatTitlesList");
      const toggleBack = document.querySelector(".chat-media-toggle");

      toggle.classList.add("display-block-toggle");
      toggleBack.classList.add("display-block");

      setMediaToggle(true);
    } else {
      const toggle = document.querySelector(".chatTitlesList");
      const toggleBack = document.querySelector(".chat-media-toggle");

      toggle.classList.remove("display-block-toggle");
      toggleBack.classList.remove("display-block");

      setMediaToggle(false);
    }
  };

  return (
    <div className="homepage">
      <div className="chat-title-media">
        <div className="chat-title-media-btn" onClick={() => handleMediaBtn()}>
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-6 w-6"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>

        <div className="chat-title-name-media">
          {chat[index] ? chat[index].title : "New Chat"}
        </div>

        <div
          className="chat-media-toggle"
          onClick={() => handleMediaBtn()}></div>
      </div>

      <ChatTitlesList handleMediaBtn={handleMediaBtn} />
      <ChatGround />
    </div>
  );
};

export default Homepage;

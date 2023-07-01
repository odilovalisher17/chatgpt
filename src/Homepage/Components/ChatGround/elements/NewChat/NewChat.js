import React from "react";
import "./NewChat.css";

const NewChat = () => {
  return (
    <div className="new-chat-ground">
      <div className="new-chat-container">
        <div className="new-chat-ground-header">ChatGPT</div>

        <div className="new-chat-ground-text">
          This web application is built on gpt-3.5 turbo model and always ready
          to communicate and help you in any situation.. If you have any
          suggestion contact :{"  "}
          <a href="https://t.me/li2690" target="_blank">
            Author
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewChat;

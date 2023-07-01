import React from "react";
import "./UserText.css";

const UserText = (props) => {
  const { text } = props;

  return (
    <div className="user-text">
      <div className="text-container">
        <div>
          <div className="chat-user-logo">U</div>
        </div>

        <div className="chat-user-messages-ground">{text}</div>
      </div>
    </div>
  );
};

export default UserText;

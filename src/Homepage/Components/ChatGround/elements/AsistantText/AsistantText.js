import React from "react";
import "./AsistantText.css";
import GPTLogo from "../../../../../images/logo.png";

const AsistantText = (props) => {
  const { text, waiting } = props;

  return (
    <div className="asistant-text">
      <div className="text-container">
        <div className="chat-logo">
          <img src={GPTLogo} alt="" />
        </div>

        {waiting && (
          <div className="waiting-three-dot">
            <div className="snippet" data-title="dot-pulse">
              <div className="stage">
                <div className="dot-pulse"></div>
              </div>
            </div>
          </div>
        )}

        <div className="chat-messages-ground">{text}</div>
      </div>
    </div>
  );
};

export default AsistantText;

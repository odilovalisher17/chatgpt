import React from "react";
import "./SendMessage.css";

const SendMessage = (props) => {
  const { messageToGPT, setMessageToGPT, handleSendMsg } = props;

  return (
    <div className="send-message">
      <form
        className="send-message-container"
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMsg(messageToGPT);
        }}>
        <div className="send-message-input">
          <input
            type="text"
            placeholder="Send a message"
            autoFocus
            value={messageToGPT}
            onChange={(e) => setMessageToGPT(e.target.value)}
          />
        </div>

        <div
          className="send-message-icon"
          onClick={(e) => {
            e.preventDefault();
            handleSendMsg(messageToGPT);
          }}>
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-4 w-4 mr-1"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </div>
      </form>
    </div>
  );
};

export default SendMessage;

import React from "react";
import "./ChatMessages.css";
import AsistantText from "../AsistantText/AsistantText";
import UserText from "../UserText/UserText";
import { useSelector } from "react-redux";
import NewChat from "../NewChat/NewChat";

const ChatMessages = () => {
  const currentChat = useSelector((state) => state.currentChat);
  const chat = useSelector((state) => state.chat);
  let index;
  for (let i = 0; i < chat.length; i++) {
    if (chat[i].id === currentChat) {
      index = i;
    }
  }

  if (chat.length !== 0) {
    return (
      <div className="chat-messages">
        {currentChat === "new-chat" && <NewChat />}

        {currentChat !== "new-chat" &&
          chat.filter((c) => c.id === currentChat)[0] &&
          chat
            .filter((c) => c.id === currentChat)[0]
            .messages.map((m) =>
              m[0] === "assistant" ? (
                <AsistantText text={m[1]} />
              ) : (
                <UserText text={m[1]} />
              )
            )}

        {chat[index] && !chat[index].isStoped && (
          <AsistantText text={""} waiting={true} />
        )}
      </div>
    );
  } else {
    return <NewChat />;
  }
};

export default ChatMessages;

import React from "react";
import "./ChatTitlesList.css";
import Logo from "./elements/Logo/Logo";
import ListChats from "./elements/ListChats/ListChats";

const ChatTitlesList = (props) => {
  const { handleMediaBtn } = props;

  return (
    <div className="chatTitlesList" onClick={() => handleMediaBtn()}>
      <Logo />

      <ListChats />

      {/* <UserDetails /> */}
    </div>
  );
};

export default ChatTitlesList;

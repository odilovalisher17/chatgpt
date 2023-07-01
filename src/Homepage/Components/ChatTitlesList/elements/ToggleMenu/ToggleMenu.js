import React, { useState } from "react";
import "./ToggleMenu.css";
import { useSelector, useDispatch } from "react-redux";
import { changeChatTitle } from "../../../../../store/Reducers/chatsReducer";

const ToggleMenu = (props) => {
  const { values } = props;
  const chat = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  const [titleOfChat, setTitleOfChat] = useState(chat[values[2]].title);

  const handleSaveBtn = () => {
    dispatch(changeChatTitle({ id: chat[values[2]].id, title: titleOfChat }));
  };

  return (
    <div className="toggle-menu">
      {values[1] === "edit" && (
        <div className="edit-menu toggle-modul" options="toggle-menu">
          <div className="toggle-modul-header" options="toggle-menu">
            Change the name of the chat
          </div>

          <div className="toggle-modul-input" options="toggle-menu">
            <input
              type="text"
              autoFocus
              placeholder="Enter name"
              options="toggle-menu"
              value={titleOfChat}
              onChange={(e) => setTitleOfChat(e.target.value)}
            />
          </div>

          <div className="toggle-buttons" options="toggle-menu">
            <button className="toggle-btn toggle-cancel">Cancel</button>
            <button
              className="toggle-btn toggle-save"
              onClick={() => handleSaveBtn()}>
              Save
            </button>
          </div>
        </div>
      )}

      {values[1] === "delete" && (
        <div className="delete-menu toggle-modul" options="toggle-menu">
          <div className="toggle-modul-header" options="toggle-menu">
            Delete chat?
          </div>

          <div className="toggle-modul-confirm" options="toggle-menu">
            Are you sure you want to delete the chat?
          </div>

          <div className="toggle-buttons" options="toggle-menu">
            <button className="toggle-btn toggle-cancel">Cancel</button>
            <button
              className="toggle-btn toggle-delete-btn"
              options="toggle-menu">
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToggleMenu;

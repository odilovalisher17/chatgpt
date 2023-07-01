import React, { useEffect, useState } from "react";
import "./ListChats.css";
import { useSelector, useDispatch } from "react-redux";
import ToggleMenu from "../ToggleMenu/ToggleMenu";
import { changeCurrentChat } from "../../../../../store/Reducers/CurrentChatReducer";

const ListChats = () => {
  const [activeTitle, setActiveTitle] = useState(-1);
  const [toggleMenu, setToggleMenu] = useState([false, "", ""]);
  const chat = useSelector((state) => state.chat);
  const dispatch = useDispatch();

  const handleToggleMenu = (event, index) => {
    if (event.target.getAttribute("options") === "toggle") {
      if (index === activeTitle) {
        setActiveTitle(-1);
      } else {
        setActiveTitle(index);
      }
    } else {
      setActiveTitle(-1);
    }
  };

  useEffect(() => {
    const listOfTitles = document.querySelector(".list-of-titles");
    listOfTitles.addEventListener("scroll", (event) => {
      handleToggleMenu(event, -1);
    });

    document.addEventListener("click", (e) => {
      if (
        e.target.getAttribute("options") === "toggle" ||
        e.target.getAttribute("options") === "toggle-menu"
      ) {
        return;
      } else {
        handleToggleMenu(e, -1);
        setToggleMenu([false, "", ""]);
      }
    });
  }, []);

  return (
    <div className="list-of-titles">
      {chat.length !== 0 &&
        chat
          .map((el) => el.title)
          .reverse()
          .map((e, ind) => {
            let index = chat.length - ind - 1;
            return (
              <div
                className="title-in-list text-primary"
                onClick={() => dispatch(changeCurrentChat(chat[index].id))}>
                <div>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    class="h-4 w-4"
                    height="1rem"
                    width="1rem"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>

                <div className="title-name">{e}</div>

                <div
                  options="toggle"
                  className="titles-three-dot"
                  onClick={(e) => handleToggleMenu(e, index)}>
                  <svg
                    options="toggle"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      options="toggle"
                      d="M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12ZM18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14Z"
                      fill="currentColor"></path>
                  </svg>
                </div>

                {activeTitle === index && (
                  <div className="title-options" options="toggle">
                    <div
                      options="toggle"
                      className="toggle-edit"
                      onClick={() => setToggleMenu([true, "edit", index])}>
                      <svg
                        options="toggle"
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        class="h-4 w-4"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path options="toggle" d="M12 20h9"></path>
                        <path
                          options="toggle"
                          d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                      </svg>
                      <p options="toggle">Change chat name</p>
                    </div>
                    <hr />
                    <div
                      options="toggle"
                      className="toggle-delete"
                      onClick={() => setToggleMenu([true, "delete", index])}>
                      <div>
                        <svg
                          options="toggle"
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          class="h-4 w-4"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg">
                          <polyline
                            options="toggle"
                            points="3 6 5 6 21 6"></polyline>
                          <path
                            options="toggle"
                            d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          <line
                            options="toggle"
                            x1="10"
                            y1="11"
                            x2="10"
                            y2="17"></line>
                          <line
                            options="toggle"
                            x1="14"
                            y1="11"
                            x2="14"
                            y2="17"></line>
                        </svg>
                      </div>

                      <div options="toggle">Delete chat</div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

      {toggleMenu[0] && (
        <ToggleMenu values={toggleMenu} options="toggle-menu" />
      )}
    </div>
  );
};

export default ListChats;

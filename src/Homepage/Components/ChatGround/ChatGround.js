import React, { useState, useEffect } from "react";
import "./ChatGround.css";
import { useSelector, useDispatch } from "react-redux";
import { changeCurrentChat } from "../../../store/Reducers/CurrentChatReducer";
import {
  createChat,
  addMessageToChat,
  changeChatTitle,
  changeStatus,
} from "../../../store/Reducers/chatsReducer";
import ChatMessages from "./elements/chatMessages/ChatMessages";
import SendMessage from "./elements/SendMessage/SendMessage";
import axios from "axios";

const ChatGround = () => {
  const chat = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  const currentChatId = useSelector((state) => state.currentChat);
  const [messageToGPT, setMessageToGPT] = useState("");

  // Make Scroll stay always Down
  useEffect(() => {
    const chatMessages = document.querySelector(".chat-messages");

    if (chatMessages) {
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  }, [chat, currentChatId]);

  const getResponseFromGPT = async (id, txt) => {
    try {
      let index;
      for (let i = 0; i < chat.length; i++) {
        if (chat[i].id === id) {
          index = i;
        }
      }

      let chatNew = [];
      if (index >= 0) {
        for (let i = 0; i < chat[index].messages.length; i++) {
          let element = {};
          element.role = chat[index].messages[i][0];
          element.content = chat[index].messages[i][1];
          chatNew.push(element);
        }
      }

      chatNew.push({
        role: "user",
        content: txt,
      });

      const res = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: chatNew,
        },
        {
          headers: {
            Authorization:
              "Bearer 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",
          },
        }
      );
      //console.log(res.data.choices[0].message.content);

      dispatch(
        addMessageToChat({
          id,
          role: "assistant",
          txt: res.data.choices[0].message.content,
        })
      );

      if (res) {
        dispatch(changeStatus({ id, status: true }));
      }
    } catch (err) {
      dispatch(
        addMessageToChat({
          id,
          role: "assistant",
          txt: "Rate limit reached for default-gpt-3.5-turbo on requests per min. Limit: 3 / min. Please try again in 20s.",
          //err.response.data.error.message,
        })
      );

      dispatch(changeStatus({ id: currentChatId, status: true }));
    }
  };

  //Get title for New Chat
  const titleForNewChat = async (id, txt) => {
    const res = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Give me only one short title name for this conversation: ${txt}`,
          },
        ],
      },
      {
        headers: {
          Authorization:
            "Bearer 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",
        },
      }
    );

    dispatch(
      changeChatTitle({ id, title: res.data.choices[0].message.content })
    );
  };

  //// ---- Send Message Btn ---- ////
  const handleSendMsg = (txt) => {
    if (txt.length > 0) {
      if (currentChatId === "new-chat") {
        dispatch(createChat({ id: `New Chat${chat.length}`, txt: txt }));
        dispatch(changeCurrentChat(`New Chat${chat.length}`));
        getResponseFromGPT(`New Chat${chat.length}`, txt);
        titleForNewChat(`New Chat${chat.length}`, txt);
        setMessageToGPT("");
      } else {
        let index;
        for (let i = 0; i < chat.length; i++) {
          if (chat[i].id === currentChatId) {
            index = i;
          }
        }

        if (chat[index].isStoped) {
          dispatch(
            addMessageToChat({ id: currentChatId, role: "user", txt: txt })
          );
          getResponseFromGPT(currentChatId, txt);
          setMessageToGPT("");
          dispatch(changeStatus({ id: currentChatId, status: false }));
        }
      }
    }
  };

  return (
    <div className="chatGround">
      <ChatMessages className="chat-messages" />

      <SendMessage
        messageToGPT={messageToGPT}
        setMessageToGPT={setMessageToGPT}
        handleSendMsg={handleSendMsg}
      />
    </div>
  );
};

export default ChatGround;

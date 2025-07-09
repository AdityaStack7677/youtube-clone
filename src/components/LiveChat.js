import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [LiveMessgae, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      console.log("API Polling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 2000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <>
      <div className="w-full h-[600px] p-2 m-1 border border-black bg-slate-100 rounded-lg overflow-y-scroll">
        <div>
          {ChatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>

      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addMessage({
              name: "Aditya Yadav",
              message: LiveMessgae,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-10/12 px-2"
          type="text"
          value={LiveMessgae}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 w-[89px] bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;

// import React from 'react'

import Messages from "./Messages";
import MessgeInput from "./MessgeInput";
import { LuMessagesSquare } from "react-icons/lu";

const ChatBox = () => {
  const isChatSelected = true;
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {isChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To: </span>
            <span className="text-white font-bold">Names</span>
          </div>
          <Messages />
          <MessgeInput />
        </>
      )}
    </div>
  );
};

export default ChatBox;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4  text-center sm:text-lg md:text-lg text-white font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋🏻 Name</p>
        <p>Select a chat for start chating!</p>
        <LuMessagesSquare className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

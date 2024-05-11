// import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="https://avatar.iran.liara.run/public" alt="user avatar" />
        </div>
      </div>
      <div className="chat-bubble text-white bg-orange-400">
        Hi, Learning chat!
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        10:03
      </div>
    </div>
  );
};

export default Message;

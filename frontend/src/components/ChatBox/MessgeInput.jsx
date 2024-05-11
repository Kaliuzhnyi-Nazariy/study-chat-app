// import React from "react";
//start command rafce
import { IoIosSend } from "react-icons/io";

const MessgeInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-500 text-white "
          placeholder="Send a message"
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3 hover:text-white"
        >
          <IoIosSend />
        </button>
      </div>
    </form>
  );
};

export default MessgeInput;

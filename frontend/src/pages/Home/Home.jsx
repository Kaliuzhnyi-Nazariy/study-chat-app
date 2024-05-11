// import React from "react";

import ChatBox from "../../components/ChatBox/ChatBox";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div
      className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0"
      //
    >
      <Sidebar />
      <ChatBox />
    </div>
  );
};

export default Home;

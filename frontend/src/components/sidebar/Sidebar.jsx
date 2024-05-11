// import React from "react";

import ListOfChats from "./ListOfChats";
import LoggedOutBtn from "./LoggedOutBtn";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className="border-r border-orange-500 p-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3" />
      <ListOfChats />
      <LoggedOutBtn />
    </div>
  );
};

export default Sidebar;

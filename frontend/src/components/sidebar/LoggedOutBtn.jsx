// import React from 'react'
import { BiLogOut } from "react-icons/bi";
import { useLogOut } from "../../hooks/index.js";
const LoggedOutBtn = () => {
  const { loading, LogOut } = useLogOut();

  return (
    <div className="mt-auto">
      <BiLogOut
        className="w-6 h-6 text-white cursor-pointer"
        onClick={LogOut}
      />
    </div>
  );
};

export default LoggedOutBtn;

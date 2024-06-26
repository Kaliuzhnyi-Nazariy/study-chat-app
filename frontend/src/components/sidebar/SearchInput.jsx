// import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="search..."
        className="input input-bordered rounded-full items-center"
      />
      <button className="btn btn-circle bg-orange-400 text-white">
        <CiSearch />
      </button>
    </form>
  );
};

export default SearchInput;

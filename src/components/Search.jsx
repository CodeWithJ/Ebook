import React from "react";
import { FiSearch } from "react-icons/fi";
import { FiBell } from "react-icons/fi";
import { AiOutlineSetting } from "react-icons/ai";

const Search = () => {
  return (
    <div className="search">
      <span id="search__icon">
        <FiSearch />
      </span>
      <div className="search__bar">
        <input type="text" placeholder="Search..." />
      </div>
      <p id="date">07 March 2021, Tuesday</p>
      <ul>
        <li>
          <AiOutlineSetting />
        </li>
        <li>
          <span id="alert"></span>
          <FiBell />
        </li>
        <li id="profile">
          <span id="username">Karen Latte</span>
          <span id="pfp"></span>
        </li>
      </ul>
    </div>
  );
};

export default Search;

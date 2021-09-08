import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { GiSoundWaves } from "react-icons/gi";
import { BiBookmarks } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { IoMdBook } from "react-icons/io";

const Header = () => {
  return (
    <header className="sidebar">
      <ul>
        <li id="logo">
          <IoMdBook />
        </li>
        <li id="active">
          <AiOutlineStar />
        </li>
        <li>
          <MdFavoriteBorder />
        </li>
        <li>
          <AiOutlineCalendar />
        </li>
        <li>
          <GiSoundWaves />
        </li>
        <li>
          <BiBookmarks />
        </li>
        <li id="logout-btn">
          <FiLogOut />
        </li>
      </ul>
    </header>
  );
};

export default Header;

import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Books = () => {
  return (
    <div className="books">
      <div className="book__nav">
        <h1>My Books</h1>
        <span className="more">
          More &nbsp;
          <FaArrowRight />
        </span>
      </div>
      <div className="recent__container">
        <div className="recent__book">
          <div className="recent__img"></div>
          <div className="recent__info">
            <h3 id="recent__title">Explorations Colony</h3>
            <p id="recent__author">
              Nathan Hystad
              <br />
              Fantasy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;

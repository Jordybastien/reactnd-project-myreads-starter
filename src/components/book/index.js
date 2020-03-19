import React from "react";
import Select from "../shared/Select";
import PropTypes from "prop-types";

const Book = ({ bookInfo, onChange }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 192,
              backgroundImage: `url(${bookInfo.imageLinks.smallThumbnail})`
            }}
          ></div>
          <Select
            selectedOption={bookInfo.shelf ? bookInfo.shelf : "none"}
            onChange={e => onChange(bookInfo, e.target.value)}
          />
        </div>
        <div className="book-title">{bookInfo.title}</div>
        <div className="book-authors">
          {bookInfo.authors &&
            bookInfo.authors.map((author, index) => (
              <span key={index}>{author} </span>
            ))}
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  bookInfo: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Book;

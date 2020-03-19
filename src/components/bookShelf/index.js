import React from "react";
import Book from "../book";
import PropTypes from "prop-types";

const BookShelf = ({ title, books, onChange }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => (
            <Book bookInfo={book} key={book.id} onChange={onChange} />
          ))}
        </ol>
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default BookShelf;

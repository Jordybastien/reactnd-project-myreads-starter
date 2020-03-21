import React from "react";
import BookShelf from "../components/bookShelf";
import Button from "../components/shared/Button";
import PropTypes from "prop-types";

const ShelvesView = ({ books, isLoadingBooks, onChange }) => {
  const currentlyReadingBooks = books.filter(
    book => book.shelf === "currentlyReading"
  );
  const readBooks = books.filter(book => book.shelf === "read");
  const wantToReadBooks = books.filter(book => book.shelf === "wantToRead");

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {isLoadingBooks ? (
            <h1>Loading...</h1>
          ) : (
            <>
              <BookShelf
                title="Currently Reading"
                books={currentlyReadingBooks}
                onChange={onChange}
              />
              <BookShelf
                title="Want to Read"
                books={wantToReadBooks}
                onChange={onChange}
              />
              <BookShelf title="Read" books={readBooks} onChange={onChange} />
            </>
          )}
        </div>
      </div>
      <Button isOpen={true} />
    </div>
  );
};

ShelvesView.propTypes = {
  books: PropTypes.array.isRequired,
  isLoadingBooks: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ShelvesView;

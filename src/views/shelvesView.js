import React from "react";
import BookShelf from "../components/bookShelf";
import Button from "../components/shared/Button";

const ShelvesView = () => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf title="Currently Reading"/>
          <BookShelf title="Want to Read"/>
          <BookShelf title="Read"/>
        </div>
      </div>
      <Button isOpen={true} />
    </div>
  );
};

export default ShelvesView;

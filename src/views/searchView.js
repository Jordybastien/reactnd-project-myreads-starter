import React, { Component } from "react";
import Button from "../components/shared/Button";
import TextBox from "../components/shared/TextBox";
import PropTypes from "prop-types";
import Book from "../components/book";

class SearchView extends Component {
  state = {
    searchText: ""
  };

  /**
   * @description This is the function that handles input in the search box 
   * and set the state of the searchText
   * @param  {string} query query to search
   * @returns returns a function to set the state of the searchText
   */
  handleInput = query => {
    this.setState({
      searchText: query.trim()
    });
  };

  render() {
    const {
      searchBook,
      searchResults,
      changeBookStatus,
      clearSearch
    } = this.props;
    const { searchText } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Button isOpen={false} clearSearch={clearSearch} />
          <div className="search-books-input-wrapper">
            <TextBox
              type="text"
              placeholder="Search by title or author"
              value={searchText}
              onChange={event => {
                this.handleInput(event.target.value);
                searchBook(searchText);
              }}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchResults && searchText ? (
              searchResults.map(book => (
                <Book
                  bookInfo={book}
                  key={book.id}
                  onChange={changeBookStatus}
                />
              ))
            ) : (
              <h1>Nothing to show Currently</h1>
            )}
          </ol>
        </div>
      </div>
    );
  }
}

SearchView.propTypes = {
  searchBook: PropTypes.func.isRequired,
  searchResults: PropTypes.array,
  changeBookStatus: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired
};

export default SearchView;

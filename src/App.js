import React from "react";
import * as BooksAPI from "./API/BooksAPI";
import "./App.css";
import SearchView from "./views/searchView";
import ShelvesView from "./views/shelvesView";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    books: [],
    isLoadingBooks: true,
    searchResults: []
  };

  /**
   * @description This is the lifecycle that will be invoked
   *  when the component will be mounted and executes the function
   * to fetch books
   */
  componentDidMount() {
    this.fetchBooks();
  }

  /**
   * @description This is the function that interacts with API endpoint to update books shelf
   * @param  {object} book Book to update
   * @param  {string} shelf Shelf to update to
   * @returns  returns a function to change the book shelf in our local state
   */
  handleBookShelf = (book, shelf) => {
    if (shelf !== "none") {
      BooksAPI.update(book, shelf);
      return this.changeBookState(book, shelf);
    }
  };

  /**
   * @description This is the function to change the book shelf in our local state
   * without having to fetch books again
   * @param  {object} book Book to update
   * @param  {string} shelf Shelf to update to
   * @returns returns a function to set the state to an updated version
   */
  changeBookState = (book, shelf) => {
    const { books } = this.state;
    const booksState = books.filter(b => {
      return b.id !== book.id;
    });
    book.shelf = shelf;
    booksState.push(book);
    return this.setState({ books: booksState });
  };

  /**
   * @description This is the function that interacts with the API endpoint to search books
   * @param  {string} query query to search
   * @returns returns a function to set the state of the searchResults
   */
  searchBook = query => {
    BooksAPI.search(query).then(result => {
      const { books } = this.state;
      Array.isArray(result)
        ? this.setState({
            searchResults: this.mergeBooks(result, books)
          })
        : this.clearSearchResult();
    });
  };

  /**
   * @description This is the function that updates the search result to make sure
   *  every thing is up to date between the search View and shelves view
   * @param  {searchResults} searchResults Array of the search results
   * @param  {books} books Array of existing books in our shelves
   * @returns returns a merged array current exsiting book in our shelves to the search results
   * with the appropriate book shelf
   */
  mergeBooks = (searchResults, books) => {
    return searchResults.map(searchedBook => {
      const found = books.find(book => book.id === searchedBook.id);
      return found ? found : searchedBook;
    });
  };

  /**
   * @description This function clears the search results state when comming from the search view
   * this solves an issue that was showing the latest search results when a user goes back to the
   * search page.
   * @returns returns a function to set the state by clearing the search result
   */
  clearSearchResult = () => {
    return this.setState({ searchResults: [] });
  };

  /**
   * @description This is the function that interacts with API endpoint to fetch books
   * @returns returns a function to set the state with the fetched books and loading state to false
   */
  fetchBooks = () => {
    return BooksAPI.getAll().then(books =>
      this.setState({
        books,
        isLoadingBooks: false
      })
    );
  };

  render() {
    const { books, isLoadingBooks, searchResults } = this.state;
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <ShelvesView
              books={books}
              isLoadingBooks={isLoadingBooks}
              onChange={this.handleBookShelf}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchView
              searchBook={this.searchBook}
              searchResults={searchResults}
              changeBookStatus={this.handleBookShelf}
              clearSearch={this.clearSearchResult}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;

import React from "react";
// import * as BooksAPI from "./API/BooksAPI";
import "./App.css";
import SearchView from "./views/searchView";
import ShelvesView from "./views/shelvesView";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {};

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => <ShelvesView />} />
        <Route path="/search" render={() => <SearchView />} />
      </div>
    );
  }
}

export default BooksApp;

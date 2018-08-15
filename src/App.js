import React from 'react';
import {Route, Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookCase from './BookCase';
import SearchPage from './SearchPage';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState({books: books}));
  }

  //This method was taken from
  //https://github.com/sarah-maris/reactnd-project-myreads
  //Not sure how else to implement this particular method
  //I did comment and figure out how it works
  shelfChange = (newBook, newShelf) => {
    BooksAPI.update(newBook, newShelf).then(response => {
      //set the shelf of the new or updated book
      newBook.shelf = newShelf;

      // get list of books without updated or new book
      // this will be an array of all the books that are NOT new or updated
      var updatedBooks = this.state.books.filter( book => book.id !== newBook.id );

      // add the new or updated book to array and set new state
      updatedBooks.push(newBook);
      this.setState({ books: updatedBooks });

    });

  }

  render() {
    //componentDidMount calls render twice use slice for immutability
    //if path matches url Route will render the UI
    const books = this.state.books.slice();
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchPage
            shelfChange={this.shelfChange}
            books={books}
          />
        )} />

        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
              <BookCase
                books={books}
                shelfChange={this.shelfChange}
              />
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )} />

      </div>
    );
  }
}

export default BooksApp;

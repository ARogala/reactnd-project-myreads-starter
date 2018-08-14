import React from 'react'
import {Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookCase from './BookCase'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState({books: books}));
  }

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
          <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
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
    )
  }
}

export default BooksApp

import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookCase from './BookCase'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
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
    const books = this.state.books.slice();
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
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
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
              <BookCase
                books={books}
                shelfChange={this.shelfChange}
              />
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp

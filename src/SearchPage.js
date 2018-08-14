import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class SearchPage extends React.Component {
	state = {
		searchedBooks: [],
		searchError: false
	}

	performSearch = (event) => {
		const query = event.target.value.trim();
		//search results are NOT shown when query is empty
		if(query==='') {
			this.setState({searchedBooks: [], searchError: false});
			return;
		}
		//search is a Promise from the BooksAPI
		const search = BooksAPI.search(query);
		search.then(books => {
			//if lenght is zero an error occured
			books.length > 0 ? this.setState({searchedBooks: books, searchError: false}) : this.setState({searchedBooks: [], searchError: true});
		});
	}

	render() {
		const searchedBooks = this.state.searchedBooks;
		const searchError = this.state.searchError;
		const shelfChange = this.props.shelfChange;

		const returnedBooks = searchedBooks.map(book => {
			return (
				<Book
					shelfContent = {book}
					key = {book.id}
					shelfChange = {shelfChange}
				/>
			);

		});

		return (
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
						<input
							type="text"
							placeholder="Search by title or author"
							onChange={this.performSearch}
						/>
					</div>
				</div>
				<div className="search-books-results">
					{searchError === false ? (
						<ol className="books-grid">
							{returnedBooks}
						</ol>
					) : (
						<div>
							<p>Search returned 0 books. Try again</p>
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default SearchPage;
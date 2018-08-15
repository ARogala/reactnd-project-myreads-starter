import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class BookShelf extends React.Component {
	render() {
		const books = this.props.books;
		const shelfChange = this.props.shelfChange;

		const shelfBooks = books.map(book => {
			return (
				<Book
					shelfContent = {book}
					books = {books}
					key = {book.id}
					shelfChange = {shelfChange}
				/>
			);

		});

		return (
			<ol className="books-grid">
				{shelfBooks}
			</ol>
		);
	}
}

BookShelf.propTypes = {
	shelfChange: PropTypes.func.isRequired,
	books: PropTypes.array.isRequired
}

export default BookShelf;
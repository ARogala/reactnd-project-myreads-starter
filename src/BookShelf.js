import React from 'react';
import Book from './Book';

class BookShelf extends React.Component {
	render() {
		const books = this.props.books;
		const shelfChange = this.props.shelfChange;

		const shelfBooks = books.map(book => {
			return (
				<Book
					shelfContent = {book}
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

export default BookShelf;
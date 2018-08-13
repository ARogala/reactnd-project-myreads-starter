import React from 'react';
import Book from './Book';

class BookShelf extends React.Component {
	render() {
		//console.log(this.props.books);
		const books = this.props.books;

		const shelfBooks = books.map(book => {
			return (
				<Book
					shelfContent={book}
					key = {book.id}
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
import React from 'react';
import Book from './Book';

class BookShelf extends React.Component {
	render() {
		return (
			<ol className="books-grid">
				<Book />
			</ol>
		);
	}
}

export default BookShelf;
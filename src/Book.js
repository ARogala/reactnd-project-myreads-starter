import React from 'react';
import BookShelfChanger from './BookShelfChanger';
import noBookCover from './icons/no-cover-image.png';
import PropTypes from 'prop-types';

class Book extends React.Component {
	render() {
		const book = this.props.shelfContent;
		const books = this.props.books;
		const shelfChange = this.props.shelfChange;

		//fallbacks for missing book cover image title and authors
		const bookCover = book.imageLinks ? book.imageLinks.thumbnail : noBookCover;
		const title = book.title ? book.title : 'No title available';

		let authors;
		if(book.authors) {
			//display multiple authors on different line
			const author = book.authors.map((author, index) => {
				return (
					<div className="book-authors" key={index}>{author}</div>
				);
			});
			authors = author;
		}
		else {
			authors = <div className="book-authors">No authors available</div>;
		}

		return (
			<li>
				<div className="book">
					<div className="book-top">
						<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookCover})` }}></div>
						<BookShelfChanger
							book = {book}
							books = {books}
							shelfChange = {shelfChange}
						/>
					</div>
					<div className="book-title">{title}</div>
					{authors}
				</div>
			</li>
		);
	}
}

Book.propTypes = {
	shelfChange: PropTypes.func.isRequired,
	books: PropTypes.array.isRequired,
	book: PropTypes.object
}

export default Book;
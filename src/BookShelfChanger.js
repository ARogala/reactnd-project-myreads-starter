import React from 'react';
import PropTypes from 'prop-types';

class BookShelfChanger extends React.Component {
	render() {
		//book is the book displayed on the current page (MyReads or search)
		//books is an array of books on the MyReads page
		const book = this.props.book;
		const books = this.props.books;
		const shelfChange = this.props.shelfChange;
		let activeShelf;
		/*book.shelf will be undefined on the search page
		  on MyReads page set activeShelf to book.shelf
		  eles on search page set activeShelf to none
		  unless the title is in the books array
		  this lets books on the search page have the same selection as they
		  appear on the MyReads page
		*/
		if(book.shelf) {
			activeShelf = book.shelf;
		}
		else {
			activeShelf = 'none';
			for(let bk of books) {
				if(book.title === bk.title) {
					book.shelf = bk.shelf;
					activeShelf = book.shelf;
				}
			}
		}

		return (
			<div className="book-shelf-changer">
				<select value={activeShelf} onChange={(e) => shelfChange(book, e.target.value)}>
					<option value="move" disabled>Move to...</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
					<option value="none">None</option>
				</select>
			</div>
		);
	}
}

BookShelfChanger.propTypes = {
	shelfChange: PropTypes.func.isRequired,
	books: PropTypes.array.isRequired,
	book: PropTypes.object.isRequired
}

export default BookShelfChanger;
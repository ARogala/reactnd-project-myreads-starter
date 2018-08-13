import React from 'react';
import BookShelf from './BookShelf';



class BookCase extends React.Component {

	render() {
		//console.log(this.props.books);
		const books = this.props.books;

		const shelves = {currentlyReading: 'Currently Reading',
						wantToRead: 'Want To Read', read: 'Read'};
		const shelvesKeys = Object.keys(shelves);
		const shelvesValues = Object.values(shelves);

		//categorize books according to shelvesKeys
		const orderedBooks = shelvesKeys.map(shelfKey => books.filter(book => book.shelf === shelfKey));
		//console.log(orderedBooks);


		//for each shelvesValues build the bookshelf within the bookcase
		const bookShelf = shelvesValues.map((shelf,index) => {
			return (
				<div className="bookshelf" key={index}>
					<h2 className="bookshelf-title">{shelf}</h2>
					<div className="bookshelf-books">
						<BookShelf
							books={orderedBooks[index]}
						/>
					</div>
				</div>
			);
		});
		//console.log(bookShelf);
		return (
			<div className="list-books-content">
				<div>
					{bookShelf}
				</div>
			</div>
		);
	}
}

export default BookCase;



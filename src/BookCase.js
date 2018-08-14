import React from 'react';
import BookShelf from './BookShelf';



class BookCase extends React.Component {

	render() {
		const books = this.props.books;
		const shelfChange = this.props.shelfChange;

		const shelves = {currentlyReading: 'Currently Reading',
						wantToRead: 'Want To Read', read: 'Read'};
		const shelvesKeys = Object.keys(shelves);
		const shelvesValues = Object.values(shelves);

		//categorize books according to shelvesKeys
		const orderedBooks = shelvesKeys.map(shelfKey => books.filter(book => book.shelf === shelfKey));


		//for each shelvesValues build the bookshelf within the bookcase
		const bookShelf = shelvesValues.map((shelf,index) => {
			return (
				<div className="bookshelf" key={index}>
					<h2 className="bookshelf-title">{shelf}</h2>
					<div className="bookshelf-books">
						<BookShelf
							books={orderedBooks[index]}
							shelfChange={shelfChange}
						/>
					</div>
				</div>
			);
		});
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



import React from 'react';
import BookShelf from './BookShelf';



class BookCase extends React.Component {
	render() {
		console.log(this.props.books);
		return (
			<div className="list-books-content">
				<div>
					<div className="bookshelf">
						<h2 className="bookshelf-title">Currently Reading</h2>
						<div className="bookshelf-books">
							<BookShelf

							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BookCase;



import React from 'react';
import BookShelfChanger from './BookShelfChanger';


class Book extends React.Component {
	render() {
		return (
			<li>
				<div className="book">
					<div className="book-top">
						<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url()` }}></div>
						<BookShelfChanger

						/>
					</div>
					<div className="book-title"></div>
					<div className="book-authors"></div>
				</div>
			</li>
		);
	}
}


export default Book;
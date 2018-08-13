import React from 'react';
import BookShelfChanger from './BookShelfChanger';


class Book extends React.Component {
	render() {
		const book = this.props.shelfContent;
		//console.log(book);

		const title = book.title ? book.title : 'No title available';
		//display multiple authors on different line
		const author = book.authors.map((author, index) => {
			return (
				<div className="book-authors" key={index}>{author}</div>
			);
		});
		const authors = book.authors ? author : 'No authors available'

		return (
			<li>
				<div className="book">
					<div className="book-top">
						<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
						<BookShelfChanger

						/>
					</div>
					<div className="book-title">{title}</div>
					{authors}
				</div>
			</li>
		);
	}
}


export default Book;
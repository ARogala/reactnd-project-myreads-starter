import React from 'react';


class BookShelfChanger extends React.Component {
	render() {
		const book = this.props.book;
		const shelfChange = this.props.shelfChange;
		console.log(book);

		return (
			<div className="book-shelf-changer">
				<select value="none" onChange={(e) => shelfChange(book, e.target.value)}>
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


export default BookShelfChanger;
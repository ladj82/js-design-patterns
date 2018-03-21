'use strict';

function Book(title, author, category) {
	this.title = title;
	this.author = author;
	this.category = category;
}

Book.prototype.toString = function() {
	return 'Title: ' + this.title + ', Author: ' + this.author + ', Category: ' + this.category;
}

var poetryBook = new Book('The Rain in Portugal', 'Billy Collins', 'Poetry');
var fantasyBook = new Book('The Lord of the Rings Trilogy', 'J.R.R. Tolkien', 'Fantasy');
var novelBook = new Book('Don Quixote', 'Miguel de Cervantes', 'Novel');
var worthReadingBooks = [poetryBook, fantasyBook, novelBook];

console.log('Books worth reading:');
worthReadingBooks.forEach((item) => {
	console.log(item.toString()); //list of books is displayed
});
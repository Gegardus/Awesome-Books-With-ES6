// import * as THREE from 'three';
import Books from './modules/classes.js';
import loadNavigation from './modules/navigation.js';
import Time from './modules/date.js';

let savedData = localStorage.getItem('books');
if (savedData === null) {
  savedData = [];
} else {
  savedData = JSON.parse(savedData);
}

const books = new Books(savedData);

books.displayBooks();

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.querySelector('#title').value;
      const author = document.querySelector('#author').value;
      books.add(title, author);
      form.reset();
    });
  });

loadNavigation();

const showtime = new Time();
showtime.show();

class Books {
    constructor(savedData) {
      this.savedData = savedData;
    }
  
    displayBooks() {
      const booksSection = document.querySelector('#bookItem');
      booksSection.innerHTML = '<h3>All awesome books</h3>';
      this.savedData.forEach((book, index) => {
        booksSection.innerHTML += `
        <div class="book">
          <h4 class="title">"${book.title}" by ${book.author}</h4>
          <button class="remove" onclick="removeBook(${index})">Remove</button>
          </div>
        `;
      });
    }
  
    remove(bookId) {
      if (bookId !== null && bookId !== undefined) {
        this.savedData.splice(bookId, 1);
        this.saveBooksToStorage();
        this.displayBooks();
      }
    }
  
    add(bookTitle, bookAuthor) {
      const newBook = {
        title: bookTitle,
        author: bookAuthor,
      };
      this.savedData.push(newBook);
      this.displayBooks();
      this.saveBooksToStorage();
    }
  
    saveBooksToStorage() {
      localStorage.setItem('books', JSON.stringify(this.savedData));
    }
  }
  
  let savedData = localStorage.getItem('books');
  if (savedData === null) {
    savedData = [];
  } else {
    savedData = JSON.parse(savedData);
  }
  const books = new Books(savedData);
  books.displayBooks();
  const removeBook = (bookId) => books.remove(bookId);
  removeBook();
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
  
  // Navigation
  
  const form = document.querySelector('#form');
  const nav = document.querySelector('.nav');
  const close = document.querySelector('.close');
  const navUl = document.querySelector('.navUl');
  const container = document.querySelector('.container');
  const navContainer = document.querySelector('.navContainer');
  const title1 = document.querySelector('.title1');
  const navLi = document.querySelectorAll('.navLi');
  const contactInfoDiv = document.querySelector('.contactInfoDiv');
  const time = document.querySelector('.time');
  const { DateTime } = this.luxon;
  
  const navOpen = () => {
    container.classList.add('d-none');
    form.classList.add('d-none');
    title1.classList.add('d-none');
    navContainer.classList.add('navActive');
    navContainer.classList.remove('navContainer');
    nav.style.display = 'none';
    close.classList.add('closeActive');
    navUl.style.display = 'flex';
    navUl.classList.add('navUlActive');
    navLi.forEach((i) => {
      i.classList.add('navLiActive');
    });
  };
  
  const navClose = () => {
    container.classList.remove('d-none');
    form.classList.remove('d-none');
    title1.classList.remove('d-none');
    navContainer.classList.remove('navActive');
    navContainer.classList.add('navContainer');
    close.classList.remove('closeActive');
    navUl.style.display = 'none';
    navUl.classList.remove('navUlActive');
    nav.style.display = 'block';
    contactInfoDiv.style.display = 'none';
  };
  
  const navClose2 = () => {
    container.classList.remove('d-none');
    form.classList.remove('d-none');
    title1.classList.remove('d-none');
    navContainer.classList.remove('navActive');
    navContainer.classList.add('navContainer');
    nav.style.display = 'none';
    close.classList.remove('closeActive');
    navUl.classList.remove('navUlActive');
    contactInfoDiv.style.display = 'none';
  };
  
  nav.addEventListener('click', navOpen);
  close.addEventListener('click', navClose);
  
  const bookList = document.getElementById('bookList');
  const addNew = document.getElementById('addNew');
  const contactInfo = document.getElementById('contactInfo');
  const booksdiv = document.querySelector('#bookItem');
  
  const addNewOpen = () => {
    navClose2();
    form.classList.remove('d-none');
    booksdiv.classList.add('d-none');
    contactInfoDiv.style.display = 'none';
    contactInfo.style.backgroundColor = 'unset';
    bookList.style.backgroundColor = 'unset';
    addNew.style.backgroundColor = '#ee82ee';
  };
  
  const bookListOpen = () => {
    navClose2();
    form.classList.add('d-none');
    booksdiv.classList.remove('d-none');
    contactInfoDiv.style.display = 'none';
    contactInfo.style.backgroundColor = 'unset';
    addNew.style.backgroundColor = 'unset';
    bookList.style.backgroundColor = '#ee82ee';
  };
  
  const contactInfoOpen = () => {
    navClose2();
    contactInfoDiv.classList.remove('d-none');
    contactInfoDiv.style.display = 'flex';
    contactInfoDiv.classList.add('contactInfoActive');
    form.classList.add('d-none');
    booksdiv.classList.add('d-none');
    addNew.style.backgroundColor = 'unset';
    bookList.style.backgroundColor = 'unset';
    contactInfo.style.backgroundColor = '#ee82ee';
  };
  
  bookList.addEventListener('click', bookListOpen);
  addNew.addEventListener('click', addNewOpen);
  contactInfo.addEventListener('click', contactInfoOpen);
  
  setInterval(() => { time.innerHTML = `${DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS)}`; }, 1);
  
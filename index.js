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
  
  
  
  setInterval(() => { time.innerHTML = `${DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS)}`; }, 1);
  
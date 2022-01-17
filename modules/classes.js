export default class Books {
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
        <button class="remove" >Remove</button>
      </div>
        `;
    });

  const removeBooks2 = document.querySelectorAll('.remove');
      removeBooks2.forEach((element, index) => {
        element.addEventListener('click', () =>{         
          this.remove(index);
        })
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
  
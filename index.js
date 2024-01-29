const myLibrary = [];

const openModal = () => {
  const open = document.querySelector('.add-new-book');
  const modal = document.querySelector('.modal');
  
  open.addEventListener('click', () => {
    modal.showModal();
  })
}

const closeModal = () => {
  const close = document.querySelector('#exit');
  const modal = document.querySelector('.modal');

  close.addEventListener('click', () => {
    modal.close();
  })
}

function Book(title, author, numOfPages, read) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.read = read;
}

function addBookToLibrary() {
  openModal();
  closeModal();
  
  const addBook = document.querySelector('add-new-book');
}

addBookToLibrary();


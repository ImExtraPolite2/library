const myLibrary = [];

const openModal = () => {
  const open = document.querySelector('.add-new-book');
  const modal = document.querySelector('.modal');
  
  open.addEventListener('click', () => {
    modal.showModal();
  })
}

const closeModal = () => {
  const modal = document.querySelector('.modal');
  const getTitle = document.querySelector('#get-title');
  const getAuthor = document.querySelector('#get-author');
  const getNumOfPages = document.querySelector('#get-num-of-pages');

  modal.close();
  getTitle.value = '';
  getAuthor.value = '';
  getNumOfPages.value = '';
}

function Book(title, author, numOfPages, read) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.read = read;
}

function addBookToLibrary() {
  const close = document.querySelector('.cancel');
  const confirm = document.querySelector('.confirm');
  const getTitle = document.querySelector('#get-title');
  const getAuthor = document.querySelector('#get-author');
  const getNumOfPages = document.querySelector('#get-num-of-pages');
  const postBooks = document.querySelector('.post-books');
  const eachBook = document.createElement('div');
  const postTitle = document.createElement('p');
  const postAuthor = document.createElement('p')
  const postNumOfPages = document.createElement('p');

  confirm.addEventListener('click', () => {
    postBooks.appendChild(eachBook);
    eachBook.appendChild(postTitle);
    eachBook.appendChild(postAuthor);
    eachBook.appendChild(postNumOfPages);
    postTitle.textContent = getTitle.value;
    postAuthor.textContent = getAuthor.value;
    postNumOfPages.textContent = getNumOfPages.value;

    closeModal();
  })

  close.addEventListener('click', () => {
    closeModal();
  })

}

openModal();
addBookToLibrary();


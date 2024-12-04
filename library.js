// create array for Library
const myLibrary = [];
    
// Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.reportBook = function() {
        return this.info();
        console.log(this.info());
    }
}

// select library container
const container = document.getElementById('library')

// function to populate cards for each book
function displayBooks() {
    container.innerHTML = '';
    myLibrary.forEach((Book) => {
        const card = document.createElement("div")
        card.classList = "card"

        //construct content for card
        const content = 
            `<div class="card">
                <h3>Title:</h3><p class="title">${Book.title}</p>
                <h3>Author:</h3><p class="author">${Book.author}</p>
                <h3>Pages:</h3><p class="pages">${Book.pages}</p>
                <h3>Read?:</h3><p class="read">${(() => {if (Book.read === true) {return 'yes';} else {return 'no';};})()}</p>
            </div>`
            ;
            //add card to container
            container.innerHTML += content;
    });
};

// function to add a new book
function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
}

//select modal and buttons
const modal = document.querySelector('#modal');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button')

openModal.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})





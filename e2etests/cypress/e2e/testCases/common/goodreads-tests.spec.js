import TestClass from "../../functionFiles/testActions";
const test = new TestClass();

describe('Search and Add Book to My Books', () => {

  let bookTitle = 'Mindset: The New Psychology of Success'     //Change the book name and check testscenarios

  beforeEach(() => {

    cy.visit('/');  // visited to https://www.goodreads.com/ 
    cy.wait(1000);


  });
  

  it('should Search for a specific book title And add it in my books', () => {
    test.searchAndaddBookToMyBooks(bookTitle);
  });

  it('should  Remove the selected book from my book list.', () => {
    test.removeBookFromMyBooks(bookTitle);
  });

  it('should verify that the book is removed from "My Books"', () => {
    test.verifyBookRemovedFromMyBooks(bookTitle);
  });


});

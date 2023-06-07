import TestClass from "./functionFiles/testActions";
const test = new TestClass();

describe('Login Test', () => {
  

  before(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;

    });
    cy.visit('/');
    cy.wait(1000);


  });

  it('should successfully log in with valid credentials', () => {
    test.login();
    test.searchAndClickBook();
    test.addBookToMyBooks();
    test.removeBookFromMyBooks();
    test.verifyBookRemovedFromMyBooks();
    test.signout()
  });

  // it('should search and click on a book', () => {
  //   test.searchAndClickBook();
  // });

  // it('should add a book to "My Books"', () => {
  //   test.addBookToMyBooks();
  // });

  // it('should remove a book from "My Books"', () => {
  //   test.removeBookFromMyBooks();
  // });

  // it('should verify that the book is removed from "My Books"', () => {
  //   test.verifyBookRemovedFromMyBooks();
  // });

  // it('should signout',() => {
  // test.signout()
  // })
});

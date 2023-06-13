import TestClass from "../../functionFiles/testActions";
const test = new TestClass();

describe('Search for a specific book', () => {
    beforeEach(() => {
       
        cy.visit('/');  // visited to https://www.goodreads.com/
      });
    
    it('should Search for a specific book title And add it in my books', () => {
        test.searchAndaddBookToMyBooks(bookTitle);
      });
    
});
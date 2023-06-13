
function TestClass() {

  function searchAndaddBookToMyBooks(bookTitle) {
    //If className or Locators are changing then store locators in varible and just change the value
    const searchInput = '.searchBox__input';                           //storing the classname in variable
    const searchIcon = '.searchBox__icon--magnifyingGlass';
    const bookRow = 'tr[itemscope][itemtype="http://schema.org/Book"]';
    const addButton = '.Button--medium';

    cy.get(searchInput).eq(0).type(bookTitle);
    cy.get(searchIcon).eq(0).click();
    cy.get(bookRow)
      .contains(bookTitle)
      .click();
    cy.wait(1000);
    cy.get(addButton).eq(0).click();
    cy.wait(10000);
    // cy.get('.Toastify__close-button').click();//alert cancelation button



  }

  function removeBookFromMyBooks(bookTitle) {
    cy.wait(1000);
    cy.get('nav.siteHeader__primaryNavInline')
      .find('a.siteHeader__topLevelLink').eq(0)
      .click({ force: true });

    cy.get('li.siteHeader__topLevelItem')                     //click mybook on navbar
      .find('a.siteHeader__topLevelLink').eq(1)
      .click({ force: true });

    cy.wait(1000);
    cy.get('#sitesearch_field').type(bookTitle);
    cy.get('.myBooksSearchButton > img').click();
    cy.get('.title > .value > a').click();
    cy.wait(1000);
    cy.get('.Button--medium').eq(0).click();
    cy.wait(1000);
    cy.get('span.Button__labelItem').contains('Remove from my shelf').click();
    cy.wait(2000);
    cy.get('button.Button.Button--primary.Button--small.Button--block')
      .contains('Remove')
      .click();
    cy.wait(10000);
    // cy.get('.Toastify__close-button').click();

  }

  function verifyBookRemovedFromMyBooks(bookTitle) {
    cy.scrollTo('top');
    cy.get('nav.siteHeader__primaryNavInline')
      .find('a.siteHeader__topLevelLink').eq(0)
      .click({ force: true });

    cy.get('li.siteHeader__topLevelItem')
      .find('a.siteHeader__topLevelLink').eq(1)
      .click({ force: true });

    cy.wait(2000);
    cy.get('#sitesearch_field').type(bookTitle);
    cy.get('.myBooksSearchButton > img').click();
    cy.get('.nocontent').should('exist');
  }

  return {
    searchAndaddBookToMyBooks: searchAndaddBookToMyBooks,
    removeBookFromMyBooks: removeBookFromMyBooks,
    verifyBookRemovedFromMyBooks: verifyBookRemovedFromMyBooks,
  };
}

module.exports = TestClass;






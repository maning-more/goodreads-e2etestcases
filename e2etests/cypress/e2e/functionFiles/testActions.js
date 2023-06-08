
function TestClass() {
  function login(email,password) {
    cy.on('uncaught:exception', (err, runnable) => {
      // Return false to prevent Cypress from failing the test
      return false;
    });
    cy.get('.authSwitchFlow')
      .contains('Sign In')
      .click();
    cy.wait(1000);
    cy.get('.gr-button--auth').eq(3).click();
    cy.get('#ap_email').type(email)
    cy.get('#ap_password').type(password)
    cy.get('#signInSubmit').click();
    cy.wait(1000);
  }

  function searchAndaddBookToMyBooks(bookTitle) {
    cy.get('.searchBox__input').eq(0).type(bookTitle);
    cy.get('.searchBox__icon--magnifyingGlass').eq(0).click();
    cy.get('tr[itemscope][itemtype="http://schema.org/Book"]')
      .contains(bookTitle)
      .click();
    cy.wait(1000);
    cy.get('.Button--medium').eq(0).click();
    cy.wait(10000);
  }

  function removeBookFromMyBooks(bookTitle) {
    cy.scrollTo('top');
    cy.wait(2000);
      cy.get('.HeaderPrimaryNav__list > :nth-child(2) > a').click()
    cy.wait(2000);
    cy.get('#sitesearch_field').type(bookTitle);
    cy.get('.myBooksSearchButton > img').click();
    cy.get('.title > .value > a').click();
    cy.wait(2000);
    cy.get('.Button--medium').eq(0).click();
    cy.wait(2000);
    cy.get('span.Button__labelItem').contains('Remove from my shelf').click();
    cy.wait(2000);
    cy.get('button.Button.Button--primary.Button--small.Button--block')
      .contains('Remove')
      .click();
    cy.wait(10000);
  }

  function verifyBookRemovedFromMyBooks(bookTitle) {
    cy.scrollTo('top');
    cy.get('.HeaderPrimaryNav__list > :nth-child(2) > a').click();
    cy.wait(2000);
    cy.get('#sitesearch_field').type(bookTitle);
    cy.get('.myBooksSearchButton > img').click();
    cy.get('.nocontent').should('exist');
  }

  function signout() {
    cy.wait(2000);
    cy.get('.dropdown__trigger > .headerPersonalNav__icon > .circularIcon').click()
    cy.get('.siteHeader__subNav > ul > [role="menuitem Sign out"] > .siteHeader__subNavLink').click()
    cy.wait(2000);
    cy.get('.authSwitchFlow > .gr-hyperlink').should('exist');
  }

  return {
    login: login,
    searchAndaddBookToMyBooks: searchAndaddBookToMyBooks,
    removeBookFromMyBooks: removeBookFromMyBooks,
    verifyBookRemovedFromMyBooks: verifyBookRemovedFromMyBooks,
    signout:signout
  };
}

module.exports = TestClass;






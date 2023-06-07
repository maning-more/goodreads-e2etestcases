
function TestClass() {
  function login() {
    cy.get('.authSwitchFlow')
      .contains('Sign In')
      .click();
    cy.wait(1000);
    cy.get('.gr-button--auth').eq(3).click();
    cy.get('#ap_email').type('maningmore41@gmail.com')
    cy.get('#ap_password').type('Maning@1999')
    cy.get('#signInSubmit').click();
    cy.wait(3000);
  }

  function searchAndClickBook() {
    cy.get('.searchBox__input').eq(0).type('Mindset: The New Psychology of Success');
    cy.get('.searchBox__icon--magnifyingGlass').eq(0).click();
    cy.get('tr[itemscope][itemtype="http://schema.org/Book"]')
      .contains('Mindset: The New Psychology of Success')
      .click();
    cy.wait(2000);
  }

  function addBookToMyBooks() {
    cy.get('.Button--medium').eq(0).click();
    cy.wait(10000);
  }

  function removeBookFromMyBooks() {
    cy.scrollTo('top');
    cy.get('.HeaderPrimaryNav__list > :nth-child(2) > a').click();
    cy.wait(2000);
    cy.get('#sitesearch_field').type('Mindset: The New Psychology of Success');
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
    cy.wait(2000);
  }

  function verifyBookRemovedFromMyBooks() {
    cy.scrollTo('top');
    cy.get('.HeaderPrimaryNav__list > :nth-child(2) > a').click();
    cy.wait(2000);
    cy.get('#sitesearch_field').type('Mindset: The New Psychology of Success');
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
    searchAndClickBook: searchAndClickBook,
    addBookToMyBooks: addBookToMyBooks,
    removeBookFromMyBooks: removeBookFromMyBooks,
    verifyBookRemovedFromMyBooks: verifyBookRemovedFromMyBooks,
    signout:signout
  };
}

module.exports = TestClass;






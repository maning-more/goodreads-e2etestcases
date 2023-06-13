function signoutTestClass() {
  function signout() {
    cy.wait(2000);
    cy.get('.dropdown__trigger > .headerPersonalNav__icon > .circularIcon').click()
    cy.get('.siteHeader__subNav > ul > [role="menuitem Sign out"] > .siteHeader__subNavLink').click()
    cy.wait(2000);
    cy.get('.authSwitchFlow > .gr-hyperlink').should('exist');
  };
  return {
    signout: signout
  };
};
module.exports = signoutTestClass()
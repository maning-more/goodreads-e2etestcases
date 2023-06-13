import loginTestClass from "../../functionFiles/login";
const test = new loginTestClass();

describe('Login Test', () => {

  beforeEach(() => {

    cy.visit('/');  // visited to https://www.goodreads.com/
  });


  // for login used login with email scenario
  it('Login to goodreads.com', () => {
    let email = 'maningmore41@gmail.com'                   //change the email and password here, to login another account
    let password = 'Maning@1999'
    test.login(email, password);

  });

  //  Add other Login test scenarios here
  //  #continue with facebook
  //  #Continue with Amazon
  //  #Continue with Apple

})
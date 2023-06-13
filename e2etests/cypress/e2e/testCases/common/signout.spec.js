import signoutTestClass from "../../functionFiles/signout";
const test = new signoutTestClass();

describe('Signout from account ', () => {

  it('should Logout', () => {
    test.signout()
  });
})
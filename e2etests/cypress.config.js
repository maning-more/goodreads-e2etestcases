module.exports = {
  e2e: {
    baseUrl: 'https://www.goodreads.com/',//You Can change base URL here
    browser: 'edge',
    specPattern: [
      'cypress/e2e//testCases/common/login.spec.js',
      'cypress/e2e/testCases/common/goodreads-tests.spec.js',
      'cypress/e2e/testCases/common/signout.spec.js',
      // 'cypress/e2e/testCases/components/navbar/searchBooks.spec.js',
      // 'cypress/e2e/testCases/components/navbar/browser.spec.js',
      // 'cypress/e2e/testCases/components/navbar/community.spec.js',
      // 'cypress/e2e/testCases/components/navbar/mybook.spec.js',

      //You can add other spec files here ,
    ],
    
    "chromeWebSecurity": false,
    autoOpen: true,
    testIsolation: false,
    video: true// Enable video recording
    

  }
};



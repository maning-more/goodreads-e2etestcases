module.exports = {
  e2e: {
    baseUrl: 'https://www.goodreads.com/',
    browser: 'firefox',
    specPattern: ['cypress/e2e/goodreads-tests.spec.js',
      //You can add other spec files here ,
    ],
    
    "chromeWebSecurity": false,
    autoOpen: false

  }
};



//These functions should perform the following actions when sent as a callback to the getHTML function from the http-functions module:
//print_uppercase.js : Transforms the html string into ALL CAPS and prints it to the console.


const getHTML = require('../HTTPFunction');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

printUpperCase = (html) => {

  /* Write your code here! */
  console.log(html.toUpperCase());

}

getHTML(requestOptions, printUpperCase);

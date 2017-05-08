const getHTML = require('../HTTPFunction');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

printHTML = (html) => {
  console.log(html.toLowerCase());
}

getHTML(requestOptions, printHTML);
const getHTML = require('../HTTPFunction');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

printHTML = (html) => {
  console.log(html.split('').reverse().join(''));
}

getHTML(requestOptions, printHTML);
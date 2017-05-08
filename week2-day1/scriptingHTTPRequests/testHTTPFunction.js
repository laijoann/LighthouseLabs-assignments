const getHTML = require('./HTTPFunction');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

printHTML = (html) => {
  console.log(html);
}

getHTML(requestOptions, printHTML);
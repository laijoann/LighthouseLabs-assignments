//This first function getAndPrintHTMLChunks will utilize the https library to GET a given URL. This function should console.log each chunk of data as it is received, concatenated with a newline character ('\n') so you can visualize each chunk.

const https = require('https');

function getAndPrintHTMLChunks () {

  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, (response) => {
    response.setEncoding('utf8');
    response.on('data', (data) => {
      console.log(data, '\n');
    })
    response.on('end', () => {
      console.log('Response stream complete.')
    });
  });

}

getAndPrintHTMLChunks();
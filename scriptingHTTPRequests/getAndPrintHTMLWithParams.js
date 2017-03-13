//In another file, create a third function, getAndPrintHTML, which will look very similar to your second function, but accepts a paramater, options, which is an object that contains values for the host and path, exactly like requestOptions. Reuse whatever code you need from part 2 - we're still getting and printing the HTML.

const https = require('https');

//example requestOptions
const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

getAndPrintHTML = (options) => {

  let responseStream = "";

  https.get(options, (response) => {
    response.setEncoding('utf8');
    response.on('data', (data) => {
      responseStream += data;
    })
    response.on('end', () => {
      console.log(responseStream);
    });
  });

}

getAndPrintHTML(requestOptions);
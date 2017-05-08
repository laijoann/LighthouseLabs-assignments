//This function should use a buffering technique to append each chunk of data to a variable as it is received, and then console.log the data once all of the data has been received. Buffering in this context means the technique you've used before (usually in loops or conditionals) of creating an empty variable and adding data to it.

const https = require('https');

getAndPrintHTML = () => {

  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  let responseStream = "";

  https.get(requestOptions, (response) => {
    response.setEncoding('utf8');
    response.on('data', (data) => {
      responseStream += data;
    })
    response.on('end', () => {
      console.log(responseStream);
    });
  });

}

getAndPrintHTML();
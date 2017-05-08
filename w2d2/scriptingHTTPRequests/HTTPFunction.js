const https = require('https');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML = (options, callback) => {

  let responseStream = "";

  https.get(options, (response) => {
    response.setEncoding('utf8');
    response.on('data', (data) => {
      responseStream += data;
    })
    response.on('end', () => {
      callback(responseStream);
    });
  })
};

module.exports = getHTML;
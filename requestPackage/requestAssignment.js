const request = require('request');
const fs = require('fs');
request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', (err) => {
    console.error(err);
  })
  .on('response', (response) => {
    console.log('Response message:', response.statusMessage, '\n', 'Response content type:', response.headers['content-type']);
    console.log('Downloading image...')
  })
  .pipe(fs.createWriteStream('./future.jpg'))
  .on('finish', () => {
    console.log('Download complete.');
  });
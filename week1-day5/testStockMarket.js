//to run: npm test testStockMarket.js

const assert = require('/vagrant/packages/node_modules/chai').assert;
const maxProfit = require('./stockMarket');

describe('Stock market profits check:', function () {
  let data;
  it ('Should return 16 as max profit', function() {
    data = [45, 24, 35, 31, 40, 38, 11];
    assert.isTrue(maxProfit(data) === 16);
  });
  it ('Should return 36 as max profit', function() {
    data = [76, 33, 58, 45, 39, 52, 69];
    assert.isTrue(maxProfit(data) === 36);
  });
});
//ASSIGNMENT: Practice solving word problems by developing looping and calculation algorithms that work with data in an array format.
//Create a function maxProfit, which, given a list of stock prices for a given day, returns the maximum profit that could have been made by buying a stock at the given price and then selling the stock later on. For example if the input is: [45, 24, 35, 31, 40, 38, 11] then your program should return 16 because if you bought the stock at $24 and sold it at $40, a profit of $16 was made and this is the largest profit that could be made. If no profit could have been made, return -1.

//const data =  [45, 24, 35, 31, 40, 38, 11];

function maxProfit(data) {
  let max = -1;
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[j] - data[i] > max)
        max = data[j] - data[i];
    }
  }
  if (max == 0) {
    max = -1;
  }
  return max;
}

module.exports = maxProfit;

//console.log(maxProfit(data));
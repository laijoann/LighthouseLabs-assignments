//Implement your own version of the built-in array map function.
//Yours will take in two arguments. The first will be an array to map and the second will be a callback function. The function will return a new array based on the results of the callback function.

var words = ["ground", "control", "to", "major", "tom"];
var mappedArr = [];

function mappedV2 (arr, cbfunc) {
  arr.forEach(cbfunc);
  return mappedArr;
  };

function printLength(element) {
  mappedArr.push(element.length);
}

console.log(mappedV2(words, printLength)); //test
//correct output: [6, 7, 2, 5, 3]


//built-in array map method:
//var mappedWords = words.map(function(word) { return word.length; });
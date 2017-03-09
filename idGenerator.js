//Exercise 1 – Loaded Die
//The following function implements the roll of a die; it returns a random number between 1 and 6 each time it is called.
var rollDie = function () {
  return Math.floor(1 + Math.random() * 6);
}
//However, instead of a random die, we want to create a cheat die that would let us predict the next number. Create a function called makeLoadedDie() which returns a function that when called, seems to generate random numbers between 1 and 6, but in fact returns numbers in a row from a hardcoded list
function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
  var currIndex = -1;
  return function() {
    /* your code here */
    if (list.length - 1 === currIndex) {
      currIndex = 0;
    } else {
      currIndex += 1;
    }
    return list[currIndex];
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6





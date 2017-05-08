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
    if (list.length - 1 === currIndex) { //to loop through cheat die list
      currIndex = 0;
    } else {
      currIndex += 1;
    }
    return list[currIndex];
  }
};

var rollLoadedDie = makeLoadedDie();

//test cases:
console.log("Exercise 1 - ID generator:");
console.log(rollLoadedDie()); //5
console.log(rollLoadedDie()); //4
console.log(rollLoadedDie()); //6
console.log(rollLoadedDie()); //1


//Exercise 2 – Countdown
//Implement a function countdownGenerator() that takes in a number x and returns a function that counts down when it is called (see starter code below).

var countdownGenerator = function (x) {
  /* your code here */
  counter = x;

  return function() {
    if (counter > 0) {
      console.log("T-minus", counter);
    } else if (counter === 0) {
      console.log("Blast Off!");
    } else {
      console.log("Rockets already gone, bub!");
    }
    return counter -= 1;
  }
};

var countdown = countdownGenerator(3);
console.log("Exercise 2 - count down generator:");
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
//Complete the following code for the assertion to pass. The result should be an array of numbers corresponding to the x-y pairs provided in the input array (ie: calculate z given x and y).
//Related to filter, is Array.prototype.map.
//If you recall Pythagorean Theorem (x^2 + y^2 = z^2), then this should be a breeze.


var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(obj) {
  var res = 0;
  res = Math.sqrt(Math.pow(obj.x, 2) + Math.pow(obj.y, 2));
  return res;
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);


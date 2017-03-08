/*Instructions:
Write a function countLetters that can return to us all the unique characters that exist in a string thats passed into the function.
Furthermore, the function should also report back how many instances of each letter were found in the string.
*/

function countLetters(str) {
  if (typeof str === "string") {
    var noSpace = str.split(" ").join("");
    var uniqueChar = {};
    for (var i = 0; i < noSpace.length; i++) {//JSON.parse(str[i]);
      if (uniqueChar[noSpace[i]] && uniqueChar[noSpace[i]]) {
        uniqueChar[noSpace[i]] += 1;
      } else {
        uniqueChar[noSpace[i]] = 1;
      }
    }
  return uniqueChar;
  } else {
    return "Please enter a valid string.";
  }

}

//test cases
console.log(countLetters("lighthouse in a house"));
console.log(countLetters(12345));
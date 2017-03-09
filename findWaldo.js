// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(index) {
  console.log("Found Waldo at index ", index, "!");
} // prints index of Waldo when found

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
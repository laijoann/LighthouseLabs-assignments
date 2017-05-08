// Write a sorting function (sometimes called a custom comparator), that sorts the above array first by the name ascending alphabetically, and in cases where the names are equal sort by descending age.
// Read about the Array.prototype.sort() function on MDN in order to implement your solution
// Did you notice that the sort() function modifies the array being sorted, whereas filter() and map() functions produced new arrays?

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function(x, y) {
  var nameA = x.name;
  var nameB = y.name;
  if (nameA < nameB) {
    return -1; //don't swap
  } else if (nameB < nameA) {
    return 1; //do swap
  } else {
    if (x.age <= y.age) {
      return -1;
    } else {
      return 1;
    }
  }
});

console.log(students);
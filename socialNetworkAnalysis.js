var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

//CHALLENGE ONE:
//List everyone, who they follow, and who follows them
function challengeOne() {
  var masterArr = [];
  for (var person in data) {
    var followsWho = [];
    var followers = [];
    for (var i = 0; i < data[person].follows.length; i++) {
      followsWho.push(data[data[person].follows[i]].name);
    }
    for (var f in data) {
      for (var k = 0; k < data[f].follows.length; k++ ) {
        if (data[f].follows[k] === person) {
        followers.push(data[f].name);
        }
      }
    }
  masterArr.push(data[person].name + " - Follows: " + followsWho + ". Followers: " + followers);
  }
}
//to test challengeOne:
console.log(challengeOne());





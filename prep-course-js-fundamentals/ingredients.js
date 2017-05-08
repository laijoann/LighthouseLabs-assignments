var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var rep = 0;
while (rep < ingredients.length) {
  console.log(ingredients[rep]);
  rep++;
}

// Write a for loop that prints out the contents of ingredients:
for (var i = 0; i < ingredients.length; i ++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var i = 0; i < ingredients.length; i ++) {
  console.log(ingredients[ingredients.length - 1 - i]);
}
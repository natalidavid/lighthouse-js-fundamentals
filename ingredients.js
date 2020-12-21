const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("Banana bread ingredients:");
for (i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Write a for loop that prints out the contents of ingredients:

console.log("Banana bread ingredients:");
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

const reverse = ingredients.reverse()
// Write a while loop that prints out the contents of ingredients:
console.log("Banana bread ingredients:");
for (i = 0; i < reverse.length; i++) {
  console.log(reverse[i]);
}
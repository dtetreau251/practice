
var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//Step 1 - Remove the last item from the vegetable array.//
vegetables.pop()
console.log(vegetables)
//Step 2 - Remove the first item from the fruit array//
fruit.shift()
console.log(fruit)
//Step 3 - Find the index of "orange."//
var indexOfOrange = fruit.indexOf("orange")
console.log(indexOfOrange)
//Step 4 - Add that number to the end of the fruit array.
fruit.push(fruit.indexOf("orange"))
console.log(fruit)
//Step 5 - Use the length property to find the length of the vegetable array.//
var vegetableLength = vegetables.length
console.log(vegetableLength)
//Step 6 - Add that number to the end of the vegetable array.//
vegetables.push(vegetableLength)
console.log(vegetables)
//Step 7 - Put the two arrays together into one array. Fruit first. Call the new Array "food".//
var food = fruit.concat(vegetables)
console.log(food)
//Step 8 - Remove 2 elements from your new array starting at index 4 with one method.//
food.splice(4,2)
console.log(food)
//Step 9 - Reverse your array//
var reversed = food.reverse()
console.log(reversed)
//Step 10 - Turn the array into a string and return it//
var stringFood = reversed.join("")
console.log(stringFood)
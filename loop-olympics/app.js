//Preliminaries instructions//
/*Write a for loop that prints to the console the numbers 0 through 9.
Write a for loop that prints to the console 9 through 0.
Write a for loop that prints these fruits to the console.
var fruit = ["banana", "orange", "apple", "kiwi"]*/

//Prelim Part 1//
/*for (i = 0; i < 10; i++) {
    console.log(i);
}
//Prelim Part 2//
for (i = 9; i >= 0; i--) {
    console.log(i);
}
//Prelim Part 3//
var fruit = ["banana", "orange", "apple", "kiwi"]
for (i = 0; i < fruit.length; i++) {
    console.log(fruit[i])
}*/

//Bronze Medal Instructions//
/*Write a for loop that will push the numbers 0 through 9 to an array.
Write a for loop that prints to the console only even numbers 0 through 100.
Write a for loop that will push every other fruit to an array.
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]*/

//Bronze Medal Part 1//

function myFunc() {
    var arr = [];
    for (let i = 0; i <= 9; i++) {
        arr.push(i);
    }
        console.log(arr);
}

myFunc();

//Bronze Medal Part 2//

function evenNumbers() {
    var largeArray = [];
    for(let i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            largeArray.push(i)
        }
    }
    console.log(largeArray);
}

evenNumbers();

//Bronze Medal Part 3//

function everyOtherFruit() {
    var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
    for(i = 1; i <= fruit.length-1; i+=2) {
        console.log(fruit[i]);
        }
}
everyOtherFruit();


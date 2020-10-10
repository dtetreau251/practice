//Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.//
var greeting = "helLo"
var upperCaseGreeting = greeting.toUpperCase()
var lowerCaseGreeting = greeting.toLowerCase()
console.log(upperCaseGreeting + lowerCaseGreeting)

//Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.//
var favoriteColor = "green"
var findMiddleIndex = Math.floor(favoriteColor.length / 2)
console.log(findMiddleIndex)

//Write a function that uses slice() and the other functions you've written to return the first half of the given string.//
var myVariable = "Hello"
var returnFirstHalf = myVariable.slice(0,2)
console.log(returnFirstHalf)

//Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.//
var lowerCase = "Hello"
var half = Math.floor(lowerCase.length / 2)
var firstHalf = lowerCase.slice(0, half)
var secondHalf = lowerCase.slice(half, lowerCase.length)
var upperCase = firstHalf.toUpperCase()
var secondLowerCase = secondHalf.toLowerCase()
console.log (upperCase + secondLowerCase)
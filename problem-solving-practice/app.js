/*Write a function that takes an array of numbers and returns the largest (without using Math.max())
largest([3, 5, 2, 8, 1]) // => 8*/

var array = [3 , 6, 2, 56, 32, 5, 89, 32];
var largest= 0;

for (i = 0; i <= largest; i++) {
    if (array[i]>largest) {
        var largest=array[i];
    }
}

console.log(largest);

//Write a function that takes an array of words and a character and returns each word that has that character present.


 function lettersWithStrings(data, str) {
   let array = []
     for (let i = 0; i < data.length; i++){
         if (data[i].includes(str)){
            array.push(data[i])
        }
    }    
     return array
 } 
 console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"))
   

/*Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

isDivisible(4, 2) // => true
isDivisible(9, 3) // => true
isDivisible(15, 4) // => false*/


function divisible(num1, num2) {
    num1 = 16
    num2 = 2
    if(num1%num2 === 0) {
        console.log("true")
    }
    else { console.log("false") }
 }

divisible()
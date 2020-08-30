var readline = require('readline-sync');

var Calculation = function(num1, num2, operation) {
    this.num1 = parseInt(num1);
    this.num2 = parseInt(num2);
    this.operation = operation;

    this.result = function() {
        var num1 = this.num1;
        var num2 = this.num2;
        var operation = this.operation;

        if (operation === "add") {
            var result = num1 + num2;
        }   else if (operation === "sub") {
            var result = num1 - num2;
        }   else if (operation === "mul") {
            var result = num1 * num2; 
        }   else if (operation === "div") {
            var result = num1 / num2;
        }
            else {
                var result = "Error!"
        }
        
        console.log("The result is: " + result);
    };
}
            
var num1 = readline.question('Please enter your first number ');
var num2 = readline.question('Please enter your second number ');
var operation = readline.question('Please enter the operation to perform: add, sub, mul, div ');

var calc = new Calculation(num1, num2, operation);

calc.result();
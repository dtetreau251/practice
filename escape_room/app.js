const readline = require("readline-sync");
const userName = readline.question("What is your name? ");
const greeting = console.log("Hello, " + userName + ". You woke up in a strange, dark room and have no idea how you got there. You need to escape.");
const options = ["Open the door", "Find the key", "Put hand in hole"];
let escaped = false;

while (!escaped) {
    let choice = readline.keyInSelect(options);
    //Compare the input to the options and display the outcome of user's choice//
    if (options[choice] === "Open the door") {
        console.log("You examine the door and it is locked. The keyhole appears to be for a skeleton key.");
    }else if (options[choice] === "Find the key" ) {
        console.log("You search around and find a loose brick. A key is hidden behind it. You use it to unlock the door and escape. Game Over.");
        break;
    }else if (options[choice] === "Put hand in hole") {
        console.log("You see a hole in the wall and reach in. A viper strikes your hand and you quickly die. Try again.");  
    }else {
        console.log("Game Over");
        break;
    }
}


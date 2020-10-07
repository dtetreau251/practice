

function forception(people, alphabet) {
    var people = ["Jon:", "Jacob:", "Jingle:", "Heimer:", "Schmidt:"]
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    var upperCase = alphabet.toUpperCase();
    var splitAlphabet = upperCase.split("");
    var newArray = []
    for (i = 0; i < people.length; i++) {
            for (i = 0; i < people.length; i++){
            newArray.push(people[i])
            newArray.push(splitAlphabet)
            }
        }
        console.log(newArray)
    }

    
forception();
const readline = require('readline-sync');

var colors = require('colors');
colors.enable();

let gameOver = false

let player = {
    playerHealth: 100
}
const edgedWeapon = [" boot knife ", " dagger ", " bowie knife", " scythe ", " axe ", " hatchet ", " saber "]

const firearm = [" revolver ", " rifle ", " shotgun " , " pistol ", " carbine "]

let inventory = [" crucifix ", " stake ", " canteen "]

let steps = 0

const userName = readline.question('You wake up in a strange place, and you cannot remember how\nyou got there. You cannot remember much. Do you remember\nyour name? Enter it now so you do not forget: '.yellow)  
console.log(`\nYou are in some sort of abandoned homestead.\nThe wind is whistling through the broken windows.\nYour head is splitting, and your thoughts are foggy.\nYou're starting to remember...Your name is ${userName}.\n\nYou pull on your trousers and cotton shirt.\nBeside the bunk is a bible and a stake shaped like a crucifix.\nThe sight of them brings back flashes of memories.\nThe stake has blood on the tip. You're pretty sure its demon blood.\nYou're not sure how you know that.\n\nSuddenly, you remember there was a dark figure in the room as you slept.\nPerhaps it was blood from this foul creature on the stake.\nYou just can't remember...\nPerhaps the creature was powerful enough to take your memories?\nIt's hard to say...\n\nBeneath the bunk are boots and a canteen.\nYou look outside and see a deserted wasteland.\nYou place your cowboy hat on your head and step outside.\n\nA feeling of dread overtakes you.\nYou know you're in for a fight.\nYou begin to walk...\n`.yellow);

function stepsFunction () {
    steps++
}

while(!gameOver) {
    const gameAction = readline.keyIn("[w]alk, [i]nventory, or [q]uit\n", {limit: "wiq"})
    if (gameAction === 'w') {
        stepsFunction();
        if (steps >= 16) {
            console.log("Death has not won the day. You have defeated the forces of evil, and saved the world from certain destruction.\nYour story will live on, admired by those who hear it.\nAlas, your identity is still unknown,\nbut the rest of your tale is yet to be written…\n")
            gameOver = true
        } else { walk() }
    }
    else if (gameAction === 'i') {
        inventoryView()
    }
    else if (gameAction === 'q') {
        quitGame()
    }
}

function inventoryView() {
    console.log(`You have ${player.playerHealth} health and these provisions: ${inventory}\n`.yellow)
}

function quitGame() {
    const quit = readline.keyIn("Quit?\n [y]es or [n]o\n", {limit: "yn"})
    if(quit === "n") {
        console.log("You're tired. You're uncertain.\nBut, the fate of the world depends on you.\nYou continue walking the path.\n".yellow)
        return;
    }
    if (quit === "y") {
        console.log("You were chosen to defeat evil, but evil has won. The world decends into darkness. All is lost\n".yellow)
        gameOver = true;
        return;
    }
}    

//Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)//
function walk() {
    const battleChance = Math.floor(Math.random() * 4)
    if(battleChance === 0) {
        startBattle()
    }
    else if (battleChance != 0) {
        adventureScript()
    }
}

function adventureScript() {
    const script = Math.floor(Math.random() * 4)
    if(script === 0){
        console.log("\nYou continue along a canyon as ravens mock you from above.\n".yellow)
    } else if (script === 1){
        console.log("\nYou take a rest in the shade of a large rock and drink from your canteen.\n".yellow)
    } else if (script === 2){
        console.log("\nYou notice the terrain begins to rise. You begin to sweat as you ascend the steep plateau. You have a feeling danger is nearby.\n".yellow)
    } else if (script === 3){
        console.log("\nYou feel a sense of dread. You know you are drawing closer.\n".yellow)
    }
}

function Enemy(name, health) {
    this.name = name
    this.health = health
}

function enemyType() {
    const enemyChance = Math.floor(Math.random() * 4)
    if(enemyChance === 0) {
        return new Enemy("Plague", 10)
    } else if(enemyChance === 1) {
        return new Enemy("Famine", 15)
    } else if(enemyChance === 2) {
        return new Enemy("War", 20)
    } else {
        return new Enemy("Conquest", 25)
    }
}

function startBattle() { 
    const enemy = enemyType()
    console.log(`\nA horseman appears in your path. It is ${enemy.name}. What will you do?`.yellow)
    const actions = readline.keyIn("\nWill you: [f]ight or [r]un\n", {limit: "fr"})
    if(actions === "f"){ 
        healthDamage(enemy)
    } else if (actions === "r") {
        console.log("\nYou try to run away".yellow)
        let run = Math.floor(Math.random() * 2)
        if(run === 0) {
            console.log("\nYou have escaped and gather your strength".yellow)
            return;
        } else if (run === 1) {
        let runDamage = Math.floor(Math.random() * 20)
            console.log(`\nThe horseman cuts off your escape! You sustain ${runDamage} damage as you run away\n`.bgRed)
            player.playerHealth = player.playerHealth - runDamage;
            healthDamage(enemy)
        }
    }
}

function healthDamage(enemy) {
    let battle = true
    while (enemy.health > 0) {
    let enemyDamage = Math.floor(Math.random() * 10);
    enemy.health = enemy.health - enemyDamage;
    console.log(`You advance on the horseman. You deal ${enemyDamage} damage. The enemy has ${enemy.health} remaining\n`.bgGreen)
    if (enemy.health <= 0) {
        let prize = weaponGenerator()
        console.log(`${enemy.name} has perished, and the demon disappears. A(n) ${prize} appears nearby.\nIt is added to your provisions and you press on.`.yellow)
        inventory.push(prize) 
        battle = false
        return;
    }
    let playerDamage = Math.floor(Math.random() * 12)
    player.playerHealth = player.playerHealth - playerDamage;
    console.log(`${enemy.name} gallops forward and attacks! You take ${playerDamage} damage. You have ${player.playerHealth} remaining\n`.bgRed)
    if(player.playerHealth <= 0) {
        console.log("The demon has prevailed.\nThe world will now come to an end. You have failed to save it...\n".bgRed)
        gameOver = true;
        return;
    }    
}

function weaponGenerator() {
    let weaponType = Math.floor(Math.random() * 2)
    if(weaponType === 0){
        const blades = edgedWeapon[Math.floor(Math.random() * edgedWeapon.length)] 
        return blades;
    } else if(weaponType === 1){
        const guns = firearm[Math.floor(Math.random() * firearm.length)] 
        return guns;
    }
}}
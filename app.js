$(() => {


// declaring and appending the healthbar stats to the player stats box
let playerHealthBar = 100;
let playerMagicBar = 100;
let enemyHealthBar = 100;
let enemyMagicBar = 100;

let enemyHealthBar2 = 100;
let enemyMagicBar2 = 100;

$('.playerHealthBar').append(playerHealthBar);
$('.playerMagicBar').append(playerMagicBar);
$('.enemyHealthBar').append(enemyHealthBar);
$('.enemyMagicBar').append(enemyMagicBar);


// array used to pick a random number from in order to see how much damage the player inflicts on the enemy
const fistStrength = [50];
// real fistStrength
// [0,20, 21, 22, 23, 24, 25, 50];
// array used to pick a random number from in order to see how much damage the enemy inflicts on the player
const zombieStrength = [0,4,5,6,7,8,9];
// this is the array used to choose randomly from that decides whether the enemy attacks or defends
const zombiesChoice = [0,1]; 

// this function is called when the player attacks, either the enemy is damaged or  will eventually be able to miss as well
const enemyHealth = () => {
// using the array to pick a random number then storing it in a variable
    PlayerStats.hitDamage = fistStrength[Math.floor(Math.random() * fistStrength.length)];
    enemyHealthBar = enemyHealthBar - PlayerStats.hitDamage;

  
        if(enemyHealthBar < 1){
            $('.textBox').text(`${enemies[0]} took ${PlayerStats.hitDamage} Damage!`);
            $('.enemyHealthBar').text(`Health: ${enemyHealthBar}`);
            setTimeout(enemyDefeated, 2000);
        }else{

            if(PlayerStats.hitDamage > 0){
                $('.textBox').text(`${enemies[0]} took ${PlayerStats.hitDamage} Damage!`);
                $('.enemyHealthBar').text(`Health: ${enemyHealthBar}`);
                $('.enemyImg').css('background-color' , 'white');
            }else{
                $('.textBox').text(`${Hero.name}s attack missed!`);
                setTimeout(enemyAttack, 2000);
            }

            setTimeout(enemyAttack, 2000);
        }

}


// this function is called when the enemy attacks, either the enemy is damaged or  will eventually be able to miss as well
const playerHealth = () => {
    // using the array to pick a random number then storing it in a variable    
    PlayerStats.hitDamage = zombieStrength[Math.floor(Math.random() * zombieStrength.length)];
    playerHealthBar = playerHealthBar - PlayerStats.hitDamage;


        if(PlayerStats.hitDamage > 0){
            $('.textBox').text(`${Hero.name} took ${PlayerStats.hitDamage} Damage!`);
            $('.playerHealthBar').text(`Health: ${playerHealthBar}`);
            $('.playerImg').css('background-color' , 'red');
            $('.playerImg').css('animation-name', 'flip-horizontal-bottom');

            if(playerHealthBar < 1){
                $('.textBox').text(`${Hero.name} defeated ${enemies[0]}!`);
                setTimeout(backToNormalWindow, 2000); 
            }else{
                setTimeout(backToNormalWindow, 2000); 
            }      
        }else{
            $('.textBox').text(`${enemies[0]}s attack missed!`)
            setTimeout(backToNormalWindow, 2000); 
        }

}


const playerAttack = () => {
    $('.textBox').text(`${Hero.name} Attacks`);
    console.log(`${enemies[0]} Attacks`);
    setTimeout(enemyHealth, 2000);
}


const enemyAttack = () => {
    $('.textBox').text(`${enemies[0]} Attacks`);
    console.log(`${enemies[0]} Attacks`);
    setTimeout(playerHealth, 2000);
}


const backToNormalWindow = () => {
    $('.playerImg').css('background-color' , 'white');
    setTimeout(yourTurn, 1000);
}


const playerDefense = () => {
    $('.textBox').text(`${Hero.name}s Defense Increased! `);
    zombieStrength.push(0);
    console.log(`${Hero.name} Defends`);
    setTimeout(enemyAttack,2000);
}


const yourTurn = () => {
    $('.btn').css('visibility', 'visible');
    $('.textBox').text(`It's your turn...`);
}

const changeEnemies1 = () => {
    $('.textBox').text(`It looks like a new enemy is approaching!`);
    enemyHealthBar = 100;
    $('.enemyHealthBar').text(`Health: ${enemyHealthBar}`);
    enemies[0] = enemies[1];    
    console.log(enemies[0]);
    const $vampireImg = $('<img>').addClass('enemyImag').attr('src', 'http://pixelartmaker.com/art/009a4d0d470ac85.png');
    $('.enemyImage').replaceWith($vampireImg);
    setTimeout(yourTurn, 2000); 
}

const changeEnemies2 = () => {
    $('.textBox').text(`It looks like a new enemy is approaching!`);
    enemyHealthBar = 100;
    $('.enemyHealthBar').text(`Health: ${enemyHealthBar}`);
    enemies[0] = enemies[2];
    console.log(enemies[0]);    
    const $mummyImg = $('<img>').addClass('enemyIma').attr('src', 'https://ya-webdesign.com/transparent250_/mummy-transparent-pixel-4.png');
    $('.enemyImag').replaceWith($mummyImg);
    setTimeout(yourTurn, 2000);  
}

const changeEnemies3 = () => {
    $('.textBox').text(`It looks like a new enemy is approaching!`);
    enemyHealthBar = 100;
    $('.enemyHealthBar').text(`Health: ${enemyHealthBar}`);
    enemies[0] = enemies[3];
    console.log(enemies[0]);    
    const $werewolfImg = $('<img>').addClass('enemyIm').attr('src', 'https://www.seekpng.com/png/full/440-4406727_mahigun-the-werewolf-pixel-art.png');
    $('.enemyIma').replaceWith($werewolfImg);
    setTimeout(yourTurn, 2000);  
}

const droppedItems = () => {
    const $cookie = $('<button>').addClass('cookie').text('Cookie');
    $('.InventoryDiv').append($cookie);
    $('.textBox').text('The enemy dropped a cookie and you picked it up.');
    if(enemies[0] === enemies[1]){
        setTimeout(changeEnemies2,2000);
    }else if(enemies[0] === enemies[2]){
        setTimeout(changeEnemies3,2000);
        console.log('yo');
    }else if(enemies[0] === enemies[0]){
        setTimeout(changeEnemies1,2000);
    }
}

const enemyDefeated = () => {
    $('.textBox').text(`${enemies[0]} has been defeated!`); 
    setTimeout(droppedItems,2000);
    
}


const Inventory = () => {
    $('.btn').css('visibility', 'hidden');
    $('.InventoryDiv').css('display', 'block');
    $('.WeaponsDiv').css('display', 'none');
    $('.close1').on('click', function(){
        $('.InventoryDiv').css('display', 'none');
        yourTurn();
    });
    $('.cookie').on('click', function(){
        playerHealthBar = 100;
        $('.playerHealthBar').text(`Health: ${playerHealthBar}`);
        $('.textBox').text('You ate the cookie and regained all your health!');
        $('.InventoryDiv').css('display', 'none');
        $('.cookie').css('display', 'none');
        setTimeout(enemyAttack, 2000);
    });
  
}

const Weapons = () => {
    $('.btn').css('visibility', 'hidden');
    $('.WeaponsDiv').css('display', 'block');
    $('.InventoryDiv').css('display', 'none');
    $('.close2').on('click', function(){
        $('.WeaponsDiv').css('display', 'none');
        yourTurn();
    });
  
}



class Player {
    constructor(name, power, health, defense){
        this.name = name;
        this.power = power;
        this.health = health;
        this.defense = defense;
        }
}

class Enemy {
    constructor(name, power, health, defense){
        this.name = name;
        this.power = power;
        this.health = health;
        this.defense = defense;
        }  
}



const PlayerStats = {
    till_Next_Level: "500exp",
    strength_Level: "kinda_Weak",
    hitDamage: "hitDamage"
};


const enemies = ["Zombie", "Vampire", "Mummy", "Werewolf"];

for (index = 0; index < enemies.length; index++) { 
    console.log(enemies[0]);
} 



const Hero = new Player("Hero", "superStrength", 100, "ok");
console.log(Hero);

const Zombie = new Enemy("Zombie", "zombieStrength", 100, "weak");

const Vampire = new Enemy("Vampire", "vampireStrength", 100, "fast");

const Mummy = new Enemy("Mummy", "mummyStrength", 100, "slow");

const WereWolf = new Enemy("Werewolf", "wereStrength", 100, "superfast");


$('.attack').on('click', function(){
        playerAttack();
        $('.enemyImg').css('background-color' , 'red');
        $('.enemyImg').css('animation-name', 'flip-horizontal-bottom');
        $('.btn').css('visibility', 'hidden');
    });

$('.defense').on('click', function(){
    playerDefense();
    $('.btn').css('visibility', 'hidden');
});

$('.Inventory').on('click', function(){
    Inventory();
});

$('.Weapons').on('click', function(){
    Weapons();
});



// $ closing tag
});
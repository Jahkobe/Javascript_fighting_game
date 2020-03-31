$(() => {


// declaring and appending the healthbar stats to the player stats box
let playerHealthBar = 100;
let playerMagicBar = 100;
let enemyHealthBar = 100;
let enemyMagicBar = 100;
$('.playerHealthBar').append(playerHealthBar);
$('.playerMagicBar').append(playerMagicBar);
$('.enemyHealthBar').append(enemyHealthBar);
$('.enemyMagicBar').append(enemyMagicBar);


// array used to pick a random number from in order to see how much damage the player inflicts on the enemy
const superStrength = [50];
// array used to pick a random number from in order to see how much damage the enemy inflicts on the player
const zombieStrength = [0,4,5,6,7,8,9];
// this is the array used to choose randomly from that decides whether the enemy attacks or defends
const zombiesChoice = [0,1]; 


// this function is called when the player attacks, either the enemy is damaged or  will eventually be able to miss as well
const enemyHealth = () => {
// using the array to pick a random number then storing it in a variable
    PlayerStats.hitDamage = superStrength[Math.floor(Math.random() * superStrength.length)];
    enemyHealthBar = enemyHealthBar - PlayerStats.hitDamage;

  
        if(enemyHealthBar < 1){
            $('.textBox').text(`${Zombie.name} took ${PlayerStats.hitDamage} Damage!`);
            $('.enemyHealthBar').text(`Health: ${enemyHealthBar}`);
            setTimeout(enemyDefeated, 2000);
        }else{


            if(PlayerStats.hitDamage > 0){
                $('.textBox').text(`${Zombie.name} took ${PlayerStats.hitDamage} Damage!`);
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
                $('.textBox').text(`${Hero.name} defeated ${Zombie.name}!`);
                setTimeout(backToNormalWindow, 2000); 
            }else{
                setTimeout(backToNormalWindow, 2000); 
            }      
        }else{
            $('.textBox').text(`${Zombie.name}s attack missed!`)
            setTimeout(backToNormalWindow, 2000); 
        }

}


const playerAttack = () => {
    $('.textBox').text(`${Hero.name} Attacks`);
    console.log(`${Hero.name} Attacks`);
    setTimeout(enemyHealth, 2000);
}


const enemyAttack = () => {
    $('.textBox').text(`${Zombie.name} Attacks`);
    console.log(`${Zombie.name} Attacks`);
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

const enemyDefeated = () => {
    $('.textBox').text(`${Zombie.name} has been defeated!`);
    setTimeout(backToNormalWindow, 2000); 
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



const Hero = new Player("Hero", "superStrength", 100, "ok");
console.log(Hero);
const Zombie = new Enemy("Zombie", "zombieStrength", 100, "weak");
console.log(Zombie);

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

// $ closing tag
});
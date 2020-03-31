$(() => {

let playerHealthBar = 100;
let playerMagicBar = 100;
let enemyHealthBar = 100;
let enemyMagicBar = 100;
$('.playerHealthBar').append(playerHealthBar);
$('.playerMagicBar').append(playerMagicBar);
$('.enemyHealthBar').append(enemyHealthBar);
$('.enemyMagicBar').append(enemyMagicBar);

const enemyHealth = () => {

const superStrength = [0,1,2,3,4,5,6,7,8,9,10]
PlayerStats.hitDamage = superStrength[Math.floor(Math.random() * superStrength.length)];
enemyHealthBar = enemyHealthBar - PlayerStats.hitDamage;
$('.textBox').text(`${Zombie.name} took ${PlayerStats.hitDamage} Damage!`)
$('.enemyHealthBar').text(`Health: ${enemyHealthBar}`);
$('.enemyImg').css('background-color' , 'white');
setTimeout(enemyAttack, 2000);
}

const playerHealth = () => {
const zombieStrength = [0,1,2,3,4,5,6,7,8,9]
PlayerStats.hitDamage = zombieStrength[Math.floor(Math.random() * zombieStrength.length)];
playerHealthBar = playerHealthBar - PlayerStats.hitDamage;
$('.textBox').text(`${Hero.name} took ${PlayerStats.hitDamage} Damage!`)
$('.playerHealthBar').text(`Health: ${playerHealthBar}`);
$('.enemyImg').css('background-color' , 'white');
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

const playerDefense = () => {
$('.textBox').text(`${Hero.name} Defends`);
console.log(`${Hero.name} Defends`);
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

$('.attack').on('click', playerAttack);

$('.attack').on('click', function(){
        $('.enemyImg').css('background-color' , 'red');
    });

$('.attack').on('click', function(){
    $('.enemyImg').css('animation-name', 'flip-horizontal-bottom');
    });

$('.defense').on('click', playerDefense);

// $ closing tag
});
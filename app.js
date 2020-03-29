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
enemyHealthBar = enemyHealthBar - PlayerStats.hitDamage;
$('.textBox').text(`${Zombie.name} took ${PlayerStats.hitDamage} Damage!`)
$('.enemyHealthBar').text(`Health: ${enemyHealthBar}`);
enemyAttack();
}

const playerHealth = () => {
    
}

const playerAttack = () => {
$('.textBox').text(`${Hero.name} Attacks`);
console.log(`${Hero.name} Attacks`);
setTimeout(enemyHealth, 2000);
}

const enemyAttack = () => {

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

PlayerStats.hitDamage = Math.floor(Math.random() * 10 + 1);
console.log(PlayerStats.hitDamage);

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
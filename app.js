// start screen
//
// you start fighting with an opponent
//
// need to create a dialouge box with a button that keeps the story moving.
// get some cool font to do it with
//

$(() => {
    

const enemyHealth = () => {
    let health = 100;
}

const playerHealth = () => {
    let health = 100;
}

const playerAttack = () => {
$h1 = $('<h1>');
$('.textBox').text(`${Hero.name} Attacks`);
 console.log(`${Hero.name} Attacks`);

}

const enemyAttack = () => {
    
}

const playerDefense = () => {
$h1 = $('<h1>');
$('.textBox').text(`${Hero.name} Defends`);
console.log(`${Hero.name} Defends`);
}

class Player {
    constructor(name, power, health){
    this.name = name;
    this.power = power;
    this.health = health;
    }
}

class Enemy {
    constructor(name, power, health){
        this.name = name;
        this.power = power;
        this.health = health;
        }
    
}

const Hero = new Player("Hero", "superStrength", 100);
console.log(Hero);

$('.attack').on('click', playerAttack);

$('.attack').on('click', function(){
        $('.enemyImage').css('background-color' , 'red');
    });

$('.attack').on('click', function(){
    $('.enemyImage').css('animation-name', 'flip-horizontal-bottom');
    });

    $('.attack').on('click', function(){
        $('.enemyImg').css('animation-name', 'flip-horizontal-bottom');
        });



$('.defense').on('click', playerDefense);

});
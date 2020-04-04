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
const fistStrength = [100];
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
            $('.enemyHealthBar').text(`Health: 0`);
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

    
    if(enemies[0] === enemies[1]){
        const $bubblegum = $('<button>').addClass(items[1]).text(items[1]);
        $('.InventoryDiv').append($bubblegum);
        $('.textBox').text('The enemy dropped some bubblegum and you picked it up.');
        setTimeout(changeEnemies2,2000);
    }else if(enemies[0] === enemies[2]){
        const $sodapop = $('<button>').addClass(items[2]).text(items[2]);
        $('.InventoryDiv').append($sodapop);
        $('.textBox').text('The enemy dropped a soda pop and you picked it up.');
        setTimeout(changeEnemies3,2000);
        console.log('yo');
    }else if(enemies[0] === enemies[0]){
        const $cookie = $('<button>').addClass(items[0]).text(items[0]);
        $('.InventoryDiv').append($cookie);
        $('.textBox').text('The enemy dropped a cookie and you picked it up.');
        setTimeout(changeEnemies1,2000);
    }

}

const enemyDefeated = () => {
    $('.textBox').text(`${enemies[0]} has been defeated!`);
    if(enemies[0] === enemies[3]){
    setTimeout(youWin, 2000);
    }else{
    setTimeout(droppedItems,2000);
    }
    
}

const youWin = () => {
    $('.textBox').text(`You defeated all the bad guys! Your freaking awesome!`);
    $('.btn').css('visibility', 'hidden');
    const $winbutton = $('<button>').addClass('winButton').attr('src', 'index.html');
    $('.InventoryWeaponsSection').append($winbutton);
    

    $('.winButton').on('click', function(){
        $('.startScreenText').text("You Win!");
    });


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
        $('.playerHealthBar').text(`Health: ${playerHealthBar = playerHealthBar + 10}`);
        $('.textBox').text('You ate the cookie and regained 10 health!');
        $('.InventoryDiv').css('display', 'none');
        $('.cookie').css('display', 'none');
        setTimeout(enemyAttack, 2000);
    });
    $('.bubblegum').on('click', function(){
        $('.playerHealthBar').text(`Health: ${playerHealthBar = playerHealthBar + 15}`);
        $('.textBox').text('You chewed on the bubblegum and regained 15 health!');
        $('.InventoryDiv').css('display', 'none');
        $('.bubblegum').css('display', 'none');
        setTimeout(enemyAttack, 2000);
    });
    $('.sodapop').on('click', function(){
        $('.playerHealthBar').text(`Health: ${playerHealthBar = playerHealthBar + 20}`);
        $('.textBox').text('You chewed on the bubblegum and regained 20 health!');
        $('.InventoryDiv').css('display', 'none');
        $('.sodapop').css('display', 'none');
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

const items = ["cookie", "bubblegum", "sodapop", "trail mix"];

for (index = 0; index < enemies.length; index++) { 
    console.log(enemies[0]);
} 

for (index = 0; index < items.length; index++) { 
    console.log(items[0]);
} 



const Hero = new Player("Hero", "superStrength", 100, "ok");
console.log(Hero);

const Zombie = new Enemy("Zombie", "zombieStrength", 100, "weak");

const Vampire = new Enemy("Vampire", "vampireStrength", 100, "fast");

const Mummy = new Enemy("Mummy", "mummyStrength", 100, "slow");

const WereWolf = new Enemy("Werewolf", "werewolfStrength", 100, "superfast");


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


// start screen functions etc.

const yourNameIsHero = () => {
    $('.startScreenText').text("Your name is Hero!");
    setTimeout(moveAround, 2000);
};

const moveAround = () => {
    $('.startScreenText').text("Move around using the left and right arrow keys");
    setTimeout(enemysApproaching, 6000);
};

const enemysApproaching = () => {
    $('.startScreenText').text("Looks like some enemies are approaching!");
    $('.startScreenZombieImage').css('visibility', 'visible');
    $('.startScreenVampireImage').css('visibility', 'visible');
    $('.startScreenMummyImage').css('visibility', 'visible');
    $('.startScreenWerewolfImage').css('visibility', 'visible');
    $('.fight').css('visibility', 'visible');
};

$('.fight').css('visibility', 'hidden');

$('.startGame').on('click', function(){
    $('.startScreenText').text("This is you!");
    $('.startGame').css("display", "none");
    setTimeout(yourNameIsHero, 2000);
});


let circle = document.querySelector('.circle');
let moveBy = 50;
 
window.addEventListener('load', () => {
    circle.style.position = 'absolute';
    circle.style.left = 0;
    circle.style.top = 0;
});
 
 
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
            circle.style.left = parseInt(circle.style.left) + moveBy + 'px';
            break;
    }
});





// $ closing tag
});
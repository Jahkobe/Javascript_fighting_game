$(() => {


var audio = new Audio('battle.wav');
audio.play();

// declaring and appending the healthbar stats to the player stats box
let playerHealthBar = 100;
// let playerMagicBar = 100;
let enemyHealthBar = 100;
// let enemyMagicBar = 100;

$('.playerHealthBar').append(playerHealthBar);
// $('.playerMagicBar').append(playerMagicBar);
$('.enemyHealthBar').append(enemyHealthBar);
// $('.enemyMagicBar').append(enemyMagicBar);


// arrays used to pick a random number from in order to see how much damage the player inflicts on the enemy
let fistStrength = [0,20, 21, 22, 23, 24, 25, 50];

let axeStrength = [0, 30, 35, 36, 37, 50];

let chainsawStrength = [0, 40, 41, 42, 43, 50];

let samuriStrength = [0, 40, 45, 48, 50];

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
                $('#enemySlot').css({'background-color':'red'});
                $('#enemySlot').css({'animation-name':'flip-horizontal-bottom'});
            }else{
                $('.textBox').text(`${Hero.name}s attack missed!`);
                setTimeout(enemyAttack, 2000);
            }

            setTimeout(enemyBackToNormal, 2000);
        }

}


// this function is called when the enemy attacks, either the enemy is damaged or  will eventually be able to miss as well
const playerHealth = () => {
    // using the array to pick a random number then storing it in a variable    
    PlayerStats.hitDamage = zombieStrength[Math.floor(Math.random() * zombieStrength.length)];
    playerHealthBar = playerHealthBar - PlayerStats.hitDamage;



            if(playerHealthBar < 1){
                $('.textBox').text(`${Hero.name} has been defeated!`);
                setTimeout(youLose, 2000); 
            }else{

                if(PlayerStats.hitDamage > 0){
                    $('.textBox').text(`${Hero.name} took ${PlayerStats.hitDamage} Damage!`);
                    $('.playerHealthBar').text(`Health: ${playerHealthBar}`);
                    $('.playerImg').css('background-color' , 'red');
                    $('.playerImg').css('animation-name', 'flip-horizontal-bottom'); 
                }else{
                    $('.textBox').text(`${enemies[0]}s attack missed!`)
                    setTimeout(backToNormalWindow, 2000); 
                }
                setTimeout(backToNormalWindow, 2000); 
            }

}

// first function called when you click attack
const playerAttack = () => {
    $('.textBox').text(`${Hero.name} Attacks`);
    console.log(`${enemies[0]} Attacks`);
    setTimeout(enemyHealth, 2000);
}

// directly after you attack the enemyAttack is called instantly
const enemyAttack = () => {
    $('.textBox').text(`${enemies[0]} Attacks`);
    console.log(`${enemies[0]} Attacks`);
    setTimeout(playerHealth, 2000);
}

const enemyBackToNormal = () => {
    $('#enemySlot').css('background-color' , 'white');
    $('#enemySlot').css({'animation-name':'none'});
    setTimeout(enemyAttack, 1000);
}

// this was an attempt to set the background back to white after enemy is injured
const backToNormalWindow = () => {
    $('.playerImg').css('background-color' , 'white');
    $('.playerImg').css({'animation-name':'none'});
    setTimeout(yourTurn, 1000);
}

// this is the first function that is called when you press defense
const playerDefense = () => {
    $('.textBox').text(`${Hero.name}s Defense Increased! `);
    zombieStrength.push(0);
    console.log(`${Hero.name} Defends`);
    setTimeout(enemyAttack,2000);
}

// after both players go then yourTurn is called 
const yourTurn = () => {
    $('.btn').css('visibility', 'visible');
    $('.textBox').text(`It's your turn...`);
}


// These are the functions called when the enemies are changing
// each enemy is changed through an array an an if statement inside of the 
// dropped items funciton
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


// This is the funtion that is called right after the enemy dies and also cycles through the 
// bad guys depending on where you are at in the game

const droppedItems = () => {

    
    if(enemies[0] === enemies[1]){
        fistStrength = chainsawStrength;
        const $bubblegum = $('<button>').addClass(items[1]).text(items[1]);
        $('.InventoryDiv').append($bubblegum);
        $('.textBox').text('The enemy dropped a chainsaw and some bubblegum picked them up, you equipped the chainsaw and you got stronger.');
        setTimeout(changeEnemies2,5000);
    }else if(enemies[0] === enemies[2]){
        fistStrength = samuriStrength;
        const $sodapop = $('<button>').addClass(items[2]).text(items[2]);
        $('.InventoryDiv').append($sodapop);
        $('.textBox').text('The enemy dropped a samuri sword and a soda pop and you picked them up, you equipped the samuri sword and you got stronger.');
        setTimeout(changeEnemies3,5000);
        console.log('yo');
    }else if(enemies[0] === enemies[0]){
        fistStrength = axeStrength;
        const $cookie = $('<button>').addClass(items[0]).text(items[0]);
        $('.InventoryDiv').append($cookie);
        $('.textBox').text('The enemy dropped an axe and a cookie and you picked them up, you equipped the axe and you got stronger.');
        setTimeout(changeEnemies1,5000);
    }

}


// when the enemy is defeated this function is called

const enemyDefeated = () => {
    $('.textBox').text(`${enemies[0]} has been defeated!`);
    if(enemies[0] === enemies[3]){
    setTimeout(youWin, 2000);
    }else{
    setTimeout(droppedItems,4000);
    }
    
}

// this function is called when you defeat all bad guys

const youWin = () => {
    $('.textBox').text(`You defeated all the bad guys! Your freaking awesome!`);
    $('.btn').css('visibility', 'hidden');
    const $winbutton = $('<button>').addClass('winButton').attr('href', 'index.html').text('You Win!, Start Over?');
    $('.winning').append($winbutton);  
};

const youLose = () => {
    $('.textBox').text(`You have been defeated!`);
    $('.btn').css('visibility', 'hidden');
    const $losebutton = $('<button>').addClass('loseButton').attr('href', 'index.html').text('You Lost!, Start Over?');
    $('.winning').append($losebutton);  
}


// this updates inventory and has all of the onclick functions for all the objects once they are inside of the inventory

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


// const Weapons = () => {
//     $('.btn').css('visibility', 'hidden');
//     $('.WeaponsDiv').css('display', 'block');
//     $('.InventoryDiv').css('display', 'none');
//     $('.close2').on('click', function(){
//         $('.WeaponsDiv').css('display', 'none');
//         yourTurn();
//     });
  
// }



class Player {
    constructor(name, power, health, defense){
        this.name = name;
        this.power = power;
        this.health = health;
        this.defense = defense;
        }
}


// this didn't really get used but once I incorporate experience points and getting stronger etc
// this will be added


// class Enemy {
//     constructor(name, power, health, defense){
//         this.name = name;
//         this.power = power;
//         this.health = health;
//         this.defense = defense;
//         }  
// }



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


//these classes will be used in the future

// const Zombie = new Enemy("Zombie", "zombieStrength", 100, "weak");

// const Vampire = new Enemy("Vampire", "vampireStrength", 100, "fast");

// const Mummy = new Enemy("Mummy", "mummyStrength", 100, "slow");

// const WereWolf = new Enemy("Werewolf", "werewolfStrength", 100, "superfast");


$('.attack').on('click', function(){
        playerAttack();
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
//
//
//

const yourNameIsHero = () => {
    $('.startScreenText').text("Your name is Hero!");
    setTimeout(moveAround, 4000);
};

const moveAround = () => {
    $('.startScreenText').text("Move around using the left and right arrow keys");
    setTimeout(enemysApproaching, 8000);
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
    setTimeout(yourNameIsHero, 4000);
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
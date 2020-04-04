# Jpursell264-gmail.com
Project-One-Game

Project:

My project is a turned based fighting game, with a little intro where you can move around using the arrow keys. As well as a little outro.

Process:

I started writing some psuedo code about what I had in mind, I wanted to make a turn based game,
where you started in an open world where you would use the arrow keys to walk until you met an enemy. At this point the turn-based battle would start. You would be able to choose to attack, defend, use items in inventory, and also upgrade your attacks by using different weapons.

What it turned into wasn't exactly that because of some time restraints but kinda close.

I started coding with my html and css just getting the layout of the attacking screen where there would be an image of the enemy in the top right corner and yourself in the bottom left. Then there would be your stats next to each picture as well as a little visual in the middle of them attacking eachother. I didn't exactly get to the middle part but got the rest of it done pretty quickly. 

Then I started trying to get some buttons in there with choices of Attack, Defend, Inventory, and Weapons. 

After that I started to write some on click functions where it would basically guide you through the battle and first with the attack  fucntion. This would take away the amount of health from you enemy that was randomly taken from a value inside an array it was pulling from, that is, if you landed the attack at all. Then I started by making a class for my player, with his name health, hitpoints etc. Where I would use in the functions to make it a little more DRY.

Next I worked out the defend functions. If you chose to defend it would add an extra 0 to the zombies attack array. Basically I had the functions working if you randomly got the number zero then the attack would miss. So naturally the attacks are going to be less likely to land.

After that I started working on getting to the next bad guy after one was defeated. I did this by making an array of the enemies and once the health was at 0 the next enemy would appear by appending a image of the new enemy and updating its health back to 100. 

Then I started working on the inventory function, I used jquery to update a new item during the death of each enemy. Then used an onclick funtion once the inventory was opened. If you click on the item you would gain a certain amount of health by updated the playerHealthBar and then adding the amount needed using the .text function.

Lastly I started working on the opening scene where you could walk around freely until the enemies approached. I didn't have much time to do this at all but was able to follow some tutorials to get my player moving and used some onclick functions to go through the dialouge and have the enemies appear.

Roadblocks:

I ran into a bunch of roadblocks while doing this.

Two of the biggest ones were trying to get the inventory and weapons to disappear and appear where and when i wanted them to. I got confused between the difference between the display and the visibility properties and kind of had them mixed up and it just took a long time to untangle all of the mess I had made. But with some patience and help from the teachers I was able to solve it.

Next was updating the health when a new enemy arrived. I also had a mess going on in my code where sometimes it was appending new elements and sometimes it was just updating with .text() and it took a while and some more help to untangle what I had done.

Also just getting the next badguy to appear by using a for loop and an array took me quite a long time. And had a ton of syntax errors in the process.

Technologies used:

Basically just a ton of functions with setTimeout functions inside of them, where I would update the text for the healthbar as well as inside the text box.

Did most of the work through the DOM as well as the basic elements I already had in place inside the html. Also used some of the animations in css on the animate page that we learned about in class. Although it didn't exactly work as well I wanted it to.

I also used a lot of jQuery, while updating certain things inside of all the functions, especially inside the inventory, where the items would get dropped and new elements would have to appear inside the inventory.

Lastly was this guys tutorial I used on youtube where I learned how to move my character accross the screen. It actually wasn't as hard as I thought but probably a little confusing to do it better then what I actually did.


Installation:

Just press that start game and you should be able to figure it out from there.


Unsolved Problems:

One main problem I had was my player keeps showing up in the wrong place at the inital load, sometime he is way lower then I want him to be and won't move at all, other times it works perfectly.

Another problem is during the opening scene, when I'm underneath the button it wont allow me to click it.

I don't neccessarily think there was too much unsolved, I think I more or less just didn't have time to do everything I wanted to do. Like add weapons. Make it so that my player couldn't walk off the screen in the startscreen. Have the animations work better. And have a better visual in the middle of the turn-base fighting screen where you could actually see some attacks happeneing.


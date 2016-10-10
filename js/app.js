// Enemies our player must avoid

var Enemy = function(beerX, beerY, beerSpeed) {

    this.x = beerX;
    this.y = beerY;
    this.speed = beerSpeed;

    //height and width of the enemy (beer) object
    this.height = 100;
    this.width = 50;

    this.sprite = 'images/beer.png';

};

Enemy.prototype.checkCollisions = function() {

    if (this.x < player.x + 47 &&
        this.x + this.width > player.x &&
        this.y < player.y + 130 &&
        this.height + this.y > player.y) {
    // collision detected
    // aka you lose
    player.x = 230;
    player.y = 400;
    console.log("Sorry, you lose.")
    console.log(this);
    }
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // Multiplies movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x < 500) {
        this.x += this.speed * dt;
       } else {
       this.x = -180;
       this.speed = Math.random() * (600 - 150) + 150;
       console.log(this.speed);
   };
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//this randomizes the speed of each of the first new Enemy objects
getRandom = function() {
    return Math.random() * (600 - 150) + 150;
};





// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var player = function(playerX, playerY){
    this.x = 230;
    this.y = 400;
    this.sprite = 'images/keyboard.png'

};

player.prototype.update = function(dt) {

};

player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

player.prototype.handleInput = function(inp) {
    if (inp === "left" && this.x > 30) {
        this.x -= 100;
    }
    if (inp === "right" && this.x < 400) {
        this.x += 100;
    }
    if (inp === 'up' && this.y > 70) {
        this.y -= 80;
    } else if (inp === 'up' && this.y <= 70) {
        //if you win
        this.y = 400;
        this.x = 230;
        console.log("YOU WIN!");
    }
    if (inp === 'down' && this.y < 380) {
        this.y += 80;
    }
    console.log(player);
};







// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



var allEnemies = [new Enemy(-180, 270, getRandom()), new Enemy(-180, 190, getRandom()), new Enemy(-180, 110, getRandom())];
var player = new player(200,400);

console.log(allEnemies);
console.log(player);



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

let projectiles = [];
let enemies = [];
let stars = [];
let heartImages = [];
let enemyProjectiles = [];

hp = 3;
let hiscore = 0;
let recordScore = false;

let soundChoice;
let score = 0;

let spawnTime = 0;
let spawnInterval = 80;

cum = 0;

let gameState = ""
let playerSpeed = 0;

function preload() {
    reverb = loadSound('sounds/fart.mp3')
    pew = loadSound('sounds/xwingfiring.mp3')
    tiepew = loadSound('sounds/tiepew.mp3')

    heart = loadImage('assets/heart.png')
    arcadeFont = loadFont('assets/retrofont.ttf')

    xWingSprite = loadImage('sprites/xwing.png')
    tieFighterSprite = loadImage('sprites/tiefighter.png')
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    xWingSprite.resize(40, 40);
    tieFighterSprite.resize(40, 40);
    heart.resize(25, 25);

    for (let i = 0; i < int(random(50, 100)); i++) {
        stars.push(new Star());
    }

    for (let i = 0; i < 3; i++) {
        heartImages.push({ image: heart, isVisible: true })
    }

    for (let i = 0; i < 1; i++) {
        enemies.push(new Enemy(tieFighterSprite))
    }

    Player = new Player()

    startButton = createButton('Start game');
    startButton.position(windowWidth/2, 200);
    startButton.style('width', '90px', 'height', '60px');
    startButton.style('font-size', '20px')
    startButton.style('font-family', 'retrofont');
    startButton.style('border', '2px solid black');
    startButton.style('background-color', 'white');
    startButton.mousePressed(StartGame)

    startButton.show();
}
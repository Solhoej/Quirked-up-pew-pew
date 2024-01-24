boxPos = 270
let projectiles = [];
let enemies = [];
let stars = [];
let heartImages = []
hp = 3;
let hiscore = 0;
let recordScore = false;

let soundChoice;
let score = 0;

let spawnTime = 0;
let spawnInterval = 80;

cum = 0;

let gameState = ""

const width = 400;
const height = 500;

function preload() {
    reverb = loadSound('sounds/fart.mp3')
    pew = loadSound('sounds/pew.mp3')

    heart = loadImage('assets/heart.png')
    arcadeFont = loadFont('assets/retrofont.ttf')
}

function setup() {
    createCanvas(width, height);
    heart.resize(25, 25);

    for (let i = 0; i < int(random(50, 100)); i++) {
        stars.push(new Star());
    }

    for (let i = 0; i < 3; i++) {
        heartImages.push({ image: heart, isVisible: true })
    }

    for (let i = 0; i < 1; i++) {
        enemies.push(new Enemy())
    }

    startButton = createButton('Start game');
    startButton.position(150, 200);
    startButton.style('width', '90px', 'height', '60px');
    startButton.style('font-size', '20px')
    startButton.style('font-family', 'retrofont');
    startButton.style('border', '2px solid black');
    startButton.style('background-color', 'white');
    startButton.mousePressed(StartGame)

    startButton.show();
}
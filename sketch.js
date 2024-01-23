boxPos = 270
let projectiles = [];
let enemies = [];
let heartImages = []
hp = 3;
let hiscore = 0;
let recordScore = false;

let soundChoice;
let score = 0;

let spawnTime = 0;
let spawnInterval = 80;

cum = 0;

let gameRunning = false;

function preload()
{
  reverb = loadSound('sounds/fart.mp3')
  pew = loadSound('sounds/pew.mp3')
  ken = loadSound('sounds/ken.mp3')
  //drift = loadSound('sounds/drift.mp3');
  
  heart = loadImage('assets/heart.png')
  arcadeFont = loadFont('assets/retrofont.ttf')
}

function setup() {
  createCanvas(400, 500);
  heart.resize(25, 25);
  
  for(let i = 0; i < 3; i++)
    {
      heartImages.push({image: heart, isVisible: true})
    }
  
  for (let i = 0; i < 1; i++)
  {
    enemies.push(new Enemy())
  }
  
  startButton = createButton('Start game');
  startButton.position(150, 200);
  startButton.style('width', '80px', 'height', '50px');
  startButton.style('font-family', 'retrofont');
  startButton.style('border', '2px solid black');
  startButton.style('background-color', 'white');

  startButton.show();

  //drift.play();
}

function MenuButton()
{
  if(startButton.mousePressed)
  {
    gameRunning = true;
    startButton.hide();
  }
}

function draw()
{
  background(220);
  
  MenuButton();
  Scoreboard();
  Player();
  EnemySpawn();
  Health();
  Hiscore();
  
  if (gameRunning)
  {
    for (let i = projectiles.length - 1; i >= 0; i--)
      {
        let projectile = projectiles[i];
        projectile.show();
        projectile.update();
        
        if (projectile.edging())
          projectiles.splice(i, 1);
      }
    
    for (let i = enemies.length - 1; i >= 0; i--)
      {
        let enemy = enemies[i];
        enemy.show();
        enemy.update();
        
        if (enemy.edging())
          {
            enemies.splice(i, 1);
            hp--;
          }

      }
    
    for (let i = enemies.length - 1; i >= 0; i--) {
      let enemy = enemies[i];
      for (let j = projectiles.length - 1; j >= 0; j--) {
        let projectile = projectiles[j];
        
        if (enemy.collision(projectile))
          {
            enemies.splice(i, 1);
            projectiles.splice(j, 1);
            score++
          }
      }
    }
  }
  //console.log(enemies);
}

function Health() {
  for (let i = heartImages.length - 1; i >= 0; i--) {
    let heartPosition = i * 35;

    if (heartImages[i].isVisible) {
      image(heartImages[i].image, 290 + heartPosition, 10);
    }
  }

  for (let i = 0; i < heartImages.length; i++) {
    if (i >= hp) {
      heartImages[i].isVisible = false;
    }
  }
  
  if (hp == 0) {
      if (!recordScore) {
          hiscore = score;
          recordScore = false;
        } else {
          recordScore = true;
        }
    }
}

function Scoreboard()
{
  textFont(arcadeFont);
  textSize(17)
  text("Score: " + score, 10, 20);
}

function Hiscore()
{
  textFont(arcadeFont);
  textSize(17);
  text("HI-Score: " + hiscore, 135, 20);
}

function ResetGame()
{
  
}

function Player()
{
  rect(boxPos, (height-20), 20, 20);
  
  if(keyIsDown(RIGHT_ARROW))
      boxPos += 5;
  
  if(keyIsDown(LEFT_ARROW))
      boxPos -= 5;
}

function keyPressed()
{
  if (keyCode == 32)
    {
      projectiles.push(new Projectile(boxPos));
      soundChoice = int(random(1, 100));
      
      if (soundChoice == 1)
      {
        reverb.play();
      } else {
        pew.play();
      }
    }
}

function EnemySpawn()
{
  spawnTime++
  if (spawnTime > spawnInterval) {
    enemies.push(new Enemy())
    spawnTime = 0;
  }
}
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



function Scoreboard() {
    textFont(arcadeFont);
    textSize(17)
    text("Score: " + score, 10, 20);
}

function Hiscore() {
    textFont(arcadeFont);
    textSize(17);
    text("HI-Score: " + hiscore, 135, 20);
}

function Player() {
    rect(boxPos, (height - 30), 20, 20);

    if (keyIsDown(RIGHT_ARROW))
        boxPos += 5;

    if (keyIsDown(LEFT_ARROW))
        boxPos -= 5;

    if (boxPos < 0)
        boxPos = 0;

    if (boxPos > width - 20)
        boxPos = width - 20;

}

function keyPressed() {
    if (gameState === "game") {
        if (keyCode == 32) {
            projectiles.push(new Projectile(boxPos));
            soundChoice = int(random(1, 100));

            if (soundChoice == 1) {
                reverb.play();
            } else {
                pew.play();
            }
        }
    }
}

function EnemySpawn() {
    spawnTime++
    if (spawnTime > spawnInterval) {
        enemies.push(new Enemy())
        spawnTime = 0;
    }
}
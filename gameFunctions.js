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

function keyPressed() {
    if (gameState === "game") {
        if (keyCode == 32) {
            projectiles.push(new Projectile(Player.playerPos + 10));
            pew.play();
        }
    }
}

function EnemySpawn() {
    spawnTime++
    if (spawnTime > windowWidth/25) {
        enemies.push(new Enemy(tieFighterSprite))
        spawnTime = 0;
    }
}
function StartGame() {
  startButton.hide();
  gameState = "game"
}

function draw() {
  background(0);

  Player.show();
  Player.movement();

  for (let i = stars.length - 1; i >= 0; i--) {
    let star = stars[i];
    star.show()
    star.update();

    if (star.edging()) {
      stars.splice(i, 1);
      stars.push(new Star(random(0, windowWidth), -5));
    }
  }

  if (gameState == "game") {
    EnemySpawn();

    for (let i = projectiles.length - 1; i >= 0; i--) {
      let projectile = projectiles[i];
      projectile.show();
      projectile.update();

      if (projectile.edging())
        projectiles.splice(i, 1);
    }

    for (let i = enemies.length - 1; i >= 0; i--) {
      let enemy = enemies[i];
      enemy.show();
      enemy.update();
      console.log(enemyProjectiles);

      if (abs(enemy.positionX - Player.playerPos) < 40) {
        let enemyProjectile = new EnemyProjectile(enemy.positionX, enemy.positionY, tiepew)
        if (enemy.firing()) {
          enemyProjectiles.push(enemyProjectile);
        }
      }

      if (enemy.edging()) {
        enemies.splice(i, 1);
        hp--;
      }
    }

    for (let i = enemyProjectiles.length - 1; i >= 0; i--) {
      let enemyProjectile = enemyProjectiles[i];
      enemyProjectile.show();
      enemyProjectile.update();

      if (enemyProjectile.y > windowHeight)
        enemyProjectiles.splice(i, 1);
    }

    CollissionDetection();
  }

  Health();
  Scoreboard();
  //Player();
  Hiscore();
}

function CollissionDetection() {
  for (let i = enemies.length - 1; i >= 0; i--) {
    let enemy = enemies[i];
    for (let j = projectiles.length - 1; j >= 0; j--) {
      let projectile = projectiles[j];

      if (enemy.collision(projectile)) {
        enemies.splice(i, 1);
        projectiles.splice(j, 1);
        score++
      }
    }
  }
}
function StartGame() {
  startButton.hide();
  gameState = "game"
}

function draw() {
  background(0);

  for (let i = stars.length - 1; i >= 0; i--) {
    let star = stars[i];
    star.show()
    star.update();

    if (star.edging()) {
      stars.splice(i, 1);
      stars.push(new Star(random(0, width), -5));
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

      if (enemy.edging()) {
        enemies.splice(i, 1);
        hp--;
      }

    }

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

  Health();
  Scoreboard();
  Player();
  Hiscore();
}
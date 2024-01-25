class EnemyProjectile {
    constructor(enemyX, enemyY) {
        this.x = enemyX;
        this.y = enemyY;
        this.played = false;
    }

    show() {
        if (!this.played) {
            tiepew.play()
            this.played = true;
        }

        push();
        fill(0, 255, 0);
        rect(this.x - 10, this.y, 4, 10);
        pop();

    }

    update() {
        this.y += 10;
    }

    collision(player) {
        if (dist(this.positionX, this.positionY, player.x, player.y) < 35)
        return true;
    }
}
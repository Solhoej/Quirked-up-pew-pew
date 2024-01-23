class Enemy {
  constructor() {
    this.positionX = random(20, 380);
    this.positionY = 0;
  }

  collision(other) {
    if (dist(this.positionX, this.positionY, other.x, other.y) < 20)
      return true;
  }

  show() {
    push()
    fill(0, 255, 0);
    rect(this.positionX, this.positionY, 20, 20);
    pop();
  }

  update() {
    this.positionY += 2;
  }

  edging() {
    if (this.positionY > height)
      return true;
  }
}
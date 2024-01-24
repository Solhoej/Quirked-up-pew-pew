class Enemy {
  constructor(sprite) {
    this.positionX = random(20, windowWidth - 20);
    this.positionY = 0;
    this.sprite = sprite;
    this.fired = false;
  }


  collision(other) {
    if (dist(this.positionX, this.positionY, other.x, other.y) < 35)
      return true;
  }

  show() {
    push()
    imageMode(CENTER)
    image(this.sprite, this.positionX, this.positionY);
    pop();
  }

  update() {
    this.positionY += 2;
  }

  firing() {
    if (!this.fired) {
      this.fired = true;
      return true
    }
  }

  edging() {
    if (this.positionY > height)
      return true;
  }
}
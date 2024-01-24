class Projectile {
  constructor(x) {
    this.x = (x + 8);
    this.y = (windowHeight - 30);
  }

  show() {
    push();
    fill(255,0,0);
    rect(this.x, this.y, 4, 10, 5);
    pop();
  }

  update() {
    this.y -= 5;
  }

  edging() {
    if (this.y < 0)
      return true
  }
}
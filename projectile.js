class Projectile
{
  constructor(x)
  {
    this.x = (x + 8);
    this.y = (height - 30);
  }
  
  show()
  {
    push();
    stroke(44, 2, 250);
    fill(3, 185, 255);
    rect(this.x, this.y, 4, 10, 5);
    pop();
  }
  
  update()
  {
    this.y -= 5;
  }
  
  edging()
  {
    if (this.y < 0)
      return true
  }
}
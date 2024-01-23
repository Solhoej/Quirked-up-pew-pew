class Star {
    constructor(x = random(0, width), y = random(0, height)) {
        this.x = x
        this.y = y
        this.speed = 0.2
    }

    show() {
        noStroke();
        fill(255);
        circle(this.x, this.y, 3)
    }

    update() {
        this.y += this.speed;
    }

    edging() {
        if (this.y > 500)
            return true;
    }
}
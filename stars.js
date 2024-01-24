class Star {
    constructor(x = random(0, windowWidth), y = random(0, windowHeight)) {
        this.x = x
        this.y = y
        this.speed = 0.2
    }

    show() {
        noStroke();
        fill(255);
        circle(this.x, this.y, 2)
    }

    update() {
        this.y += this.speed;
    }

    edging() {
        if (this.y > windowHeight)
            return true;
    }
}
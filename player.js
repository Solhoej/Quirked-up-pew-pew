class Player {
    constructor() {
        this.acceleration = 0.2;
        this.deceleration = 0.4;
        this.maxSpeed = 30;

        this.playerSpeed = 0;
        this.playerPos = windowWidth / 2
    }

    show() {
        image(xWingSprite, this.playerPos, (windowHeight - 45));
    }

    movement() {
        if (keyIsDown(RIGHT_ARROW)) {
            this.playerSpeed = constrain((this.playerSpeed + this.acceleration), -this.maxSpeed, this.maxSpeed);
        } else if (keyIsDown(LEFT_ARROW)) {
            this.playerSpeed = constrain((this.playerSpeed - this.acceleration), -this.maxSpeed, this.maxSpeed);
        } else {
            if (this.playerSpeed > 0) {
                this.playerSpeed = max(0, this.playerSpeed - this.deceleration);
            } else if (this.playerSpeed < 0) {
                this.playerSpeed = min(0, this.playerSpeed + this.deceleration);
            }
        }
    
        this.playerPos += this.playerSpeed;
    
        this.playerPos = constrain(this.playerPos, 0, windowWidth - 40);
    
        if (Math.abs(this.playerSpeed) < 0.01)
            this.playerSpeed = 0;
    }
}
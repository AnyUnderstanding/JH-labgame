class Citzen {
    constructor(x, y, w, h, speed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.speed = speed;
        this.direction = 0;
        this.dialog = false;
        this.convinced = false;
        this.i = 0;
        this.random = 0;
    }

    show() {
        if (!this.convinced) {
            image(unconvincedNPC, this.x, this.y, this.w, this.h);
        } else {
            image(playerSpriteRight, this.x, this.y, this.w, this.h);
        }
    }

    move() {
        if (this.i === this.random) {
            this.speed = 7 + Math.floor(Math.random() * 3) - 3;
            this.direction = Math.floor(Math.random() * 2) - 2;
            this.i = 0;
            this.getRandom(500, 0);
            console.log("turn")
        }
        this.walk();
        this.i++;

    }

    walk() {
        this.x += this.speed;
        this.y += this.direction;
        this.checkBoundaries();
        this.checkForDialog();
    }

    getRandom(highBound, lowBound) {
        this.random = Math.floor(Math.random() * highBound) + lowBound;
    }

    checkBoundaries() {
        if (this.x + this.w > width) {
            this.speed *= -1;
            this.x = width - this.h;
            this.changeDirection();
        }
        if (this.x < 0) {
            this.speed *= -1;
            this.x = 0;
            this.changeDirection();
        }

        if (this.y + this.h > height) {
            this.y = height - this.h;
            this.changeDirection();
        }
        if (this.y < 0) {
            this.y = 0;
            this.changeDirection();
        }
    }

    checkForObstacles(obstacles) {
        for (let i = 0; i < obstacles.length; i++) {
            if (obstacles[i].x < this.x + this.w &&
                obstacles[i].x + obstacles[i].w > this.x &&
                obstacles[i].y < this.y + this.h &&
                obstacles[i].y + obstacles[i].h > this.y) {
                this.changeDirection();
            }
        }
    }

    changeDirection() {
        this.direction = Math.random() * 4 - 2;
    }

    checkForDialog() {
        if (this.dialog) {
            this.onDialog();
        }
    }

    onDialog() {
        this.speed = 0;
        this.direction = 0;
    }
}

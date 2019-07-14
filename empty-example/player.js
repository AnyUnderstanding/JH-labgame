class Player {
    constructor(x, y, w, h, speed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.speed = speed;
    }

    show() {
        fill(133);
        rect(this.x, this.y, this.w, this.h)
    }

    walk() {
        if (keyIsDown(UP_ARROW)) {
            this.y -= this.speed ;
        } else if (keyIsDown(DOWN_ARROW)) {
            this.y += this.speed;
        }
        if (keyIsDown(LEFT_ARROW)) {
            this.x -= this.speed;
        } else if (keyIsDown(RIGHT_ARROW)) {
            this.x += this.speed;

        }

        this.checkBoundaries();
    }

    checkBoundaries() {
        if (this.x + this.w > width) {
            this.x = width - this.h;
        }
        if (this.x < 0) {
            this.x = 0;
        }

        if (this.y + this.h > height) {
            this.y = height - this.h;
        }
        if (this.y < 0) {
            this.y = 0;
        }
    }


}
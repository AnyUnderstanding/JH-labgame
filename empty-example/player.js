class Player {
    constructor(x, y, w, h, speed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.speed = speed;
        this.dialog = false;
        this.direction = 0;
        this.directionSet = 1;
    }



    show() {
        if (this.direction === 1 && this.directionSet === 0) {
            this.directionSet = 1;
        }else if (this.direction === 0 && this.directionSet === 1) {
            this.directionSet = 0;
        }
        switch(this.direction){
            case 0:
                image(playerSpriteLeft, this.x, this.y, this.w, this.h);
                break;
            case 1:
                image(playerSpriteRight, this.x, this.y, this.w, this.h);
                break;
        }
    }

    walk() {
       // if (!this.dialog) {
            if (keyIsDown(UP_ARROW)) {
                this.y -= this.speed;
            } else if (keyIsDown(DOWN_ARROW)) {
                this.y += this.speed;
            }
            if (keyIsDown(LEFT_ARROW)) {
                this.direction = 0;
                this.x -= this.speed;
            } else if (keyIsDown(RIGHT_ARROW)) {
                this.direction = 1;
                this.x += this.speed;

            }

            this.checkBoundaries();
        //}
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
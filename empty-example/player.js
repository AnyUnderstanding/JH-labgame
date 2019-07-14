class Player {
    constructor(x, y, w, h, speed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.speed = speed;
        this.key = 0;
    }

    show() {
        fill(133);
        rect(this.x, this.y, this.w, this.h)
    }

    walk() {

        window.onkeyup = function (e) {
            this.key = e.keyCode ? e.keyCode : e.which;
        };

        switch (this.key) {

            case 38||87: //up
                this.y -= this.speed;
                console.log(this.x+"        "+this.speed +"      "+key);

                break;
            case 40||83: //down
                this.y += this.speed;
                break;
            case 39||68: //right
                this.x += this.speed;
                break;
            case 37||65: //left
                this.x -= this.speed;
                break;
            default:
                console.log("as");
                break;
        }


        // this.checkBoundaries();
    }

    checkBoundaries() {
        if (this.x + this.w > width) {
            this.speed *= -1;
            this.x = width - this.h;
        }
        if (this.x < 0) {
            this.speed *= -1;
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
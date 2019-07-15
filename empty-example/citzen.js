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
    }

    show() {
        if(!this.convinced){
            fill(234,12,45);
        }else {
            fill(102,255,102);
        }
        strokeWeight(0);
        rect(this.x, this.y, this.w, this.h)
    }

    walk() {
     //   if (!this.dialog){
        this.x += this.speed;
        this.y += this.direction;
        this.checkBoundaries();
      //  }
    }

    checkBoundaries() {
        if (this.x+this.w > width) {
            this.speed *= -1;
            this.x = width-this.h;
            this.changeDirection();
        }
        if (this.x < 0) {
            this.speed *= -1;
            this.x = 0;
            this.changeDirection();
        }

        if (this.y+this.h > height) {
            this.y = height-this.h;
            this.changeDirection();
        }
        if (this.y < 0) {
            this.y = 0;
            this.changeDirection();
        }
    }
    changeDirection(){
        this.direction = Math.random()*4-2;
    }
}
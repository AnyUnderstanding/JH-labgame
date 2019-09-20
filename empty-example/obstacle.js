class Obstacle {
    constructor(x, y, w, h, image) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.image = image;
    }

    show() {
       // image(this.image, this.x, this.y, this.w, this.h);
        fill(255);
        rect(this.x,this.y,this.w,this.h);
    }
}
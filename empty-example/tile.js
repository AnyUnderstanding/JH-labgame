class Tile {
    constructor(x, y, w, h, image) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.image = image;
    }

    show() {
        image(this.image, this.x*size, this.y*size, this.w*size, this.h*size);
    }
}
class SceneStart {

    constructor(){
        this.size;
        this.citzen = [];
        this.player;
        this.dialog = false;
    }

    setup() {
        this.size = (width + height) / 2 * 0.03;
        this.player = new Player(90, 90, this.size, this.size, 2);
        this.createCitzen();
    }

    draw() {
        for (let i = 0; i < this.citzen.length; i++) {
            this.citzen[i].show();
            this.citzen[i].walk();
        }
        if (!this.dialog) {
            this.collison();
        }
        this.player.show();
        this.player.walk();
    }

    collison() {
        for (let i = 0; i < this.citzen.length; i++) {
            if (this.citzen[i].convinced) continue;
            if (this.player.x < this.citzen[i].x + this.citzen[i].w &&
                this.player.x + this.player.w > this.citzen[i].x &&
                this.player.y < this.citzen[i].y + this.citzen[i].h &&
                this.player.y + this.player.h > this.citzen[i].y) {
               // this.dialog = true;
                this.player.dialog = true;
                this.citzen[i].dialog = true;
                this.citzen[i].convinced = true;
               /* setTimeout(function () {
                    this.pauseGameOnCollision(i)
                }, 1000);*/
            }

        }
    }

    createCitzen() {
        for (let i = 0; i < 10; i++) {
            this.citzen.push(new Citzen(0, 0, this.size, this.size, Math.random() * 5));
            this.citzen[i].changeDirection();
        }

    }

    pauseGameOnCollision(i) {
        this.dialog = false;
        this.player.dialog = false;
        this.citzen[i].dialog = false;
    }
}
class SceneStart {

    constructor(player, size) {
        this.size = size;
        this.citzen = [];
        this.player = player;
        this.dialog = false;
        this.teleporter = 0;
    }

    setup() {
        this.createCitzen();
        this.teleporter = new SceneChanger(300, 300, 20, 20, this.player, 1);

    }

    setBackground() {
        background(12, 32, 89)
    }

    draw() {

        this.teleporter.show();

        for (let i = 0; i < this.citzen.length; i++) {
            this.citzen[i].show();
            this.citzen[i].walk();
        }
        if (!this.dialog) {
            this.collison();
        }
        this.player.show();
        this.player.walk();
        if (this.teleporter.collision()){
            console.log("llll");
            scene = 1;}
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
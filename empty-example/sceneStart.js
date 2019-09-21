class SceneStart {
    map;
    index;

    constructor(player, size) {
        this.size = size;
        this.tiles = [];
        this.citzen = [];
        this.obstacle = [];
        this.player = player;
        this.dialog = false;
        this.teleporter = 0;
    }

    setup() {
        this.drawScene();
        this.createCitzen();
        this.createObstacles();
        this.teleporter = new SceneChanger(size * 26, size * 4.5, size * 1.5, size * 4, this.player, 1);
        this.bubble = new speechBubble("Hello I am an alien!");

    }

    setBackground() {
        background(12, 32, 89)
    }

    draw() {

        this.map.draw();
        this.checkWin();

        for (let i = 0; i < this.citzen.length; i++) {
            this.citzen[i].show();
            this.citzen[i].move();
            this.citzen[i].checkForObstacles(this.map.obstacles)
        }


        if (!this.dialog) {
            this.collison();
        }
        this.player.show();
        this.player.walk();
        this.player.checkForObstacles(this.map.obstacles);

        if (this.teleporter.collision()) {
            scene = 1;
        }
        this.bubble.show();
        this.bubble.getPlayPos(this.player.x, this.player.y);
    }

    drawScene() {
        this.map = new Map(2);
        this.map.drawVerticaleStreet(0, 0, 10);
        this.map.drawHorizontalStreet(9, 3, 15);
        this.map.drawTiles(10, 1, 11.5, 2.5, introTiles[1]);
        this.map.drawTiles(10, 0, 12.5, 0.5, introTiles[0]);
        this.map.drawTiles(12, 1, 12.5, 2.5, introTiles[0]);
        this.map.drawTiles(0, 4, 8.5, 11, introTiles[2])
        this.map.drawTiles(13, 0, 23, 11, introTiles[2])
        this.map.drawTiles(13, 1, 13.5, 1.5, introTiles[3], 2)

    }
    checkWin(){
        let j = 0
        for (let i = 0;i<this.citzen.length;i++){
            if (this.citzen[i].convinced)j++;
        }
        if (j===this.citzen.length)alert("Well done! You saved our World.\n Now its time save yours")
    }

    collison() {
        for (let i = 0; i < this.citzen.length; i++) {
            if (this.citzen[i].convinced) continue;
            if (this.player.x < this.citzen[i].x + this.citzen[i].w &&
                this.player.x + this.player.w > this.citzen[i].x &&
                this.player.y < this.citzen[i].y + this.citzen[i].h &&
                this.player.y + this.player.h > this.citzen[i].y) {
                this.player.dialog = true;
                pauseGame = false;
                this.citzen[i].dialog = true;
                this.index = i;
            }
        }
    }

    convince() {
        this.citzen[this.index].convinced = convince;
    }

    createCitzen() {
        for (let i = 0; i < 10; i++) {
            this.citzen.push(new Citzen(0, 0, this.size, this.size, Math.random() * 5));
            this.citzen[i].changeDirection();
        }

    }

    createObstacles() {
        this.obstacle.push(new Obstacle(50, 50, this.size, this.size, questMasterImg));
    }

    pauseGameOnCollision(i) {
        this.citzen.this.dialog = false;
        this.player.dialog = false;
        this.citzen[i].dialog = false;
    }
}
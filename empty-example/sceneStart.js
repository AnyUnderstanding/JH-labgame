class SceneStart {

    constructor(player, size) {
        this.size = size;
        this.citzen = [];
        this.obstacle = [];
        this.player = player;
        this.dialog = false;
        this.teleporter = 0;
    }

    setup() {
        this.createCitzen();
        this.createObstacles();
        this.teleporter = new SceneChanger(300, 300, 20, 20, this.player, 1);
        this.bubble = new speechBubble("Hello I am an alien!");
        let quiz = new Quiz();
        quiz.logRandomQuestion();
    }

    setBackground() {
        background(12, 32, 89)
    }

    draw() {

        this.teleporter.show();

        for (let i = 0; i < this.citzen.length; i++) {
            this.citzen[i].show();
            this.citzen[i].move();
            this.citzen[i].checkForObstacles(this.obstacle)
        }
        for (let i = 0; i < this.obstacle.length; i++) {
            this.obstacle[i].show();

        }
        if (!this.dialog) {
            this.collison();
        }
        this.player.show();
        this.player.walk();
        this.player.checkForObstacles(this.obstacle)

        if (this.teleporter.collision()){
            scene = 1;}
        this.bubble.show();
        this.bubble.getPlayPos(this.player.x, this.player.y);
    }

    collison() {
        for (let i = 0; i < this.citzen.length; i++) {
            if (this.citzen[i].convinced) continue;
            if (this.player.x < this.citzen[i].x + this.citzen[i].w &&
                this.player.x + this.player.w > this.citzen[i].x &&
                this.player.y < this.citzen[i].y + this.citzen[i].h &&
                this.player.y + this.player.h > this.citzen[i].y) {
                this.player.dialog = true;
                this.citzen[i].dialog = true;
                this.citzen[i].convinced = true;
            }
        }
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
        this.dialog = false;
        this.player.dialog = false;
        this.citzen[i].dialog = false;
    }
}
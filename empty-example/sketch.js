let citzen = [];
let player;

function setup() {
    createCanvas(400, 400);
    player = new Player(20, 20, 20, 20, 2);
    createCitzen();

}

function draw() {

    background(220);
    collison();
    player.show();
    player.walk();
    for (let i = 0; i < citzen.length; i++) {
        collison();
        citzen[i].show();
        citzen[i].walk()
    }
}

function createCitzen() {
    for (let i = 0; i < 10; i++) {
        citzen.push(new Citzen(0, 0, 20, 20, Math.random() * 2));
        citzen[i].changeDirection();
    }

}

function collison() {
    for (let i = 0; i < citzen.length; i++) {
        if (player.x < citzen[i].x + citzen[i].w &&
            player.x + player.w > citzen[i].x &&
            player.y < citzen[i].y + citzen[i].h &&
            player.y + player.h > citzen[i].y) {
            console.log("collison")
        }
    }
}

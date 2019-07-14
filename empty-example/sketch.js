let citzen = [];
let player;

function setup() {
    createCanvas(400, 400);
    player = new Player(20, 20, 20, 20, 2);
    createCitzen();

}

function draw() {

    background(220);
    player.show();
    player.walk();
    for (let i = 0; i < citzen.length; i++) {
        citzen[i].show();
        citzen[i].walk()
    }
}

function createCitzen() {
    for (let i = 0; i < 10; i++) {
        citzen.push(new Citzen(0, 0, 20, 20,Math.random()*2));
        citzen[i].changeDirection();
    }

}

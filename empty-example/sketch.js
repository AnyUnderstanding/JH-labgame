let timer;
let duration = 20;
let size;
let szene;

let playerSprite;
function preload() {
    playerSprite = loadImage('assets/img/characters/player.png');
}

function setup() {
    createCanvas(Math.max(document.documentElement.clientWidth, window.innerWidth || 0), Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
    szene = new SceneStart();
    timer = new Timer(duration, 0, 0, 20, width);
    szene.setup();
}

function draw() {
    background(0);
    if (timer.update()) {
        timer.show();
        alert("GAMER OVER \n press to play again");
        reset();

    }
    timer.show();
    szene.draw();

}

function reset() {
    while (szene.citzen.length > 0) {
        szene.citzen.pop();
    }
    setup();
}

function resize() {
    createCanvas(Math.max(document.documentElement.clientWidth, window.innerWidth || 0), Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
    size = (width + height) / 2 * 0.03;
    szene.player.w = size;
    szene.player.h = size;
    for (let i = 0; i < 10; i++) {
        szene.citzen[i].w = size;
        szene.citzen[i].h = size;
    }
}

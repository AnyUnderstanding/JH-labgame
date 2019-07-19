let timer;
let duration = 20;
let size;
let startScene;
let scene2;
let scene = 0;
let player;


let playerSpriteRight;
let playerSpriteLeft;
let unconvincedNPC;

function preload() {
    playerSpriteRight = loadImage('assets/img/characters/playerRight.png');
    playerSpriteLeft = loadImage('assets/img/characters/playerLeft.png');
    unconvincedNPC = loadImage('assets/img/characters/unconvinced.png');
}

function setup() {
    createCanvas(Math.max(document.documentElement.clientWidth, window.innerWidth || 0), Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
    size = (width + height) / 2 * 0.03;
    player = new Player(800, 90, size, size, 6);
    startScene = new SceneStart(player, size);
    scene2 = new Scene2(player, size);
    timer = new Timer(duration, 0, 0, 20, width);

    scene2.setup();

    startScene.setup();
}

function draw() {
    console.log(scene);

    switch (scene) {
        case 0:
            startScene.setBackground();
            drawTimer();
            startScene.draw();
            break;
        case 1:
            scene2.setBackground();
            drawTimer();
            scene2.draw();
            break;
    }



    timer.show();


}

function drawTimer() {
    if (timer.update()) {
        timer.show();
        alert("GAMER OVER \n press to play again");
        reset();

    }
}

function reset() {
    while (startScene[scene].citzen.length > 0) {
        startScene[scene].citzen.pop();
    }
    setup();
}

function resize() {
    createCanvas(Math.max(document.documentElement.clientWidth, window.innerWidth || 0), Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
    size = (width + height) / 2 * 0.03;
    startScene.player.w = size;
    startScene.player.h = size;
    for (let i = 0; i < 10; i++) {
        startScene.citzen[i].w = size;
        startScene.citzen[i].h = size;
    }
}

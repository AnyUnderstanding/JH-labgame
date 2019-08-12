let timer;
let duration = 20;
let size;
let startScene;
let scene2;
let scene = 0;
let player;
let pauseGame = true;
let dialog;


let playerSpriteRight;
let playerSpriteLeft;
let unconvincedNPC;
let jsonFile;

function preload() {
    playerSpriteRight = loadImage('assets/img/characters/playerRight.png');
    playerSpriteLeft = loadImage('assets/img/characters/playerLeft.png');
    unconvincedNPC = loadImage('assets/img/characters/unconvinced.png');
    let url = "files/quiz.json";
    jsonFile = loadJSON(url);

}

function setup() {
    createCanvas(Math.max(document.documentElement.clientWidth, window.innerWidth || 0), Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
    size = (width + height) / 2 * 0.03;
    player = new Player(800, 90, size, size, 6);
    startScene = new SceneStart(player, size);
    scene2 = new Scene2(player, size);
    timer = new Timer(duration, 0, 0, 20, width);
    dialog = new Dialog();

    scene2.setup();

    startScene.setup();
    console.log(jsonFile)
}

function draw() {
    if (pauseGame) {
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
    } else {
        let list = ["addsf","sdf","gfdg"];
        dialog.showDialog(0.10,null,null,list);
    }

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

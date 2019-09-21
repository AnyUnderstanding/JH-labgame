let timer;
let duration = 20;
let size;
let startScene;
let scene2;
let scene = 0;
let player;
let pauseGame = true;
let dialog;
let introScene;
let quiz;
let convince;

let introTiles = [];

let playerSpriteRight;
let playerSpriteLeft;
let unconvincedNPC;
let questMasterImg;

let jsonFile;
p5.disableFriendlyErrors = true;

function preload() {
    playerSpriteRight = loadImage('./assets/img/characters/playerRight.png');
    playerSpriteLeft = loadImage('./assets/img/characters/playerLeft.png');
    unconvincedNPC = loadImage('./assets/img/characters/unconvinced.png');
    questMasterImg = loadImage('./assets/img/characters/questmaster.png');
    introTiles.push(loadImage('./assets/img/tiles/sidewalk.jpeg'));
    introTiles.push(loadImage('./assets/img/tiles/street.jpeg'));
    introTiles.push(loadImage('./assets/img/tiles/grass.jpeg'));
    introTiles.push(loadImage('./assets/img/tiles/teleporter.png'));
    console.log(introTiles)
    let url = "files/quiz.json";
    jsonFile = loadJSON(url);

}

function setup() {
    createCanvas(Math.max(document.documentElement.clientWidth, window.innerWidth || 0), Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
    console.log(jsonFile)
    size = (width + height) / 2 * 0.03;
    player = new Player(800, 90, size, size, 6 + 6);
    startScene = new SceneStart(player, size);
    scene2 = new Scene2(player, size);
    introScene = new IntroScene(player, size);
    timer = new Timer(duration, 0, 0, 20, width);
    quiz = new Quiz(jsonFile, dialog);
    scene2.setup();
    startScene.setup();
    introScene.setup();
    dialog = new Dialog(startScene);

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
            case -1:
                introScene.setBackground();
                introScene.draw();
                break;
        }
        if (scene !== -1) timer.show();

    } else {
        quiz.logRandomQuestion();
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


function keyPressed() {
    if (dialog) {
        dialog.inputHandler(keyCode)
    }
}
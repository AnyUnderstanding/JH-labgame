let citzen = [];
let player;
let dialog = false;
let dialogBox = document.getElementById("dialogBox");

function setup() {
    createCanvas(400, 400);
    player = new Player(90, 90, 20, 20, 2);
    createCitzen();

}

function draw() {

    background(220);
    if (!dialog) {
        collison();
    }
    player.show();
    player.walk();
    for (let i = 0; i < citzen.length; i++) {
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
        if(citzen[i].convinced)continue;
        if (player.x < citzen[i].x + citzen[i].w &&
            player.x + player.w > citzen[i].x &&
            player.y < citzen[i].y + citzen[i].h &&
            player.y + player.h > citzen[i].y) {
            dialog = true;
            player.dialog = true;
            citzen[i].dialog = true;
            citzen[i].convinced = true;
            dialogBox.innerHTML = "you convinced me :)";
            setTimeout(function() {
                a(i)
            }, 1000);        }

    }
}
function a(i) {
    dialog = false;
    player.dialog = false;
    citzen[i].dialog = false;
    dialogBox.innerHTML = "find more fellows";

}

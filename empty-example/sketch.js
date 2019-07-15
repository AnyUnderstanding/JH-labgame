let citzen = [];
let player;
let dialog = false;
let timer;
let duration = 3;

function setup() {
    createCanvas(Math.max(document.documentElement.clientWidth, window.innerWidth || 0),Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
    player = new Player(90, 90, 20, 20, 2);
    createCitzen();
    timer = new Timer(duration,0,0,20,width,);
}

function draw() {

    background(220);
    if (!dialog) {
        collison();
    }
    if(timer.update()){
        timer.show();
        alert("GAMER OVER \n press to play again");
        reset();

    }
    timer.show();
    for (let i = 0; i < citzen.length; i++) {
        citzen[i].show();
        citzen[i].walk()
    }
    player.show();
    player.walk();


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
            setTimeout(function() {
                pauseGameOnCollision(i)
            }, 1000);        }

    }
}
function pauseGameOnCollision(i) {
    dialog = false;
    player.dialog = false;
    citzen[i].dialog = false;

}
function reset() {
    while(citzen.length > 0) {
        citzen.pop();
    }
setup();
}

class speechBubble{
    constructor(text){
        this.content = text;
        this.posX = 0;
        this.posY = 0;
    }
    show(){
        fill(255,255,255);
        textSize(20);
        textAlign(CENTER);
        text(this.content, this.posX+28, this.posY + 55);
    }

    getPlayPos(x, y){
        this.posX = x;
        this.posY = y;
        console.log(this.posY + "<-y x->" + this.posX);
    }

}
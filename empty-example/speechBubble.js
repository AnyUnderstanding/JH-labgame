class speechBubble{
    constructor(text){
        this.content = text;
        this.posX = 0;
        this.posY = 0;
        this.textsize = 20;
        this.textWidth = (textWidth(this.content));
    }
    show(){
        fill(255,255,255);

        textSize(this.textsize);
        textAlign(CENTER);

        if((this.posX) - this.textWidth < 0) {
            this.generateBubble(this.content, this.posX-((this.posX) - this.textWidth/2)+40, this.posY + 55);
        }else if(((this.posX) + this.textWidth) + 28 > width) {
            this.generateBubble(this.content, width-this.textWidth/2 - 40, this.posY + 55);

        }else if(((this.textsize*2) + this.posY) > height) {
            this.generateBubble(this.content, this.posX+28, this.posY-50);

        }else {
            this.generateBubble(this.content, this.posX + 28, this.posY + 55);
        }

    }

    getPlayPos(x, y){
        this.posX = x;
        this.posY = y;
        //console.log(this.posY + "<-y x->" + this.posX);
    }

    generateBubble(content, x, y){
        this.textWidth1 = (textWidth(content));
        fill(255,255,255);
        rect(x-(this.textWidth1/2)-10, y, this.textWidth1+20, 40);
        fill(0,0,0);
        text(this.content, x, y+20);
    }

}
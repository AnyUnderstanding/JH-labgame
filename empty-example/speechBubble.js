class speechBubble{
    constructor(text, spriteWidth){
        this.content = text;
        this.imgWidth = 2 + spriteWidth;
        this.posX = 0;
        this.posY = 0;
        this.textsize = 20;
        this.textWidth = (textWidth(this.content));
        this.boxWidth = (textWidth(this.content)*2)+20;
        this.corner = "";

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
            console.log((this.textsize*2) + this.posY);

        }else {
            this.generateBubble(this.content, this.posX + 28, this.posY + 55);
        }
        //left corner
        /*if((this.posX) - this.boxWidth/2 < 0){
            this.corner = "left";
            this.generateBubble(this.content, this.posX, this.posY+55);
            console.log(this.imgWidth);
        }else{
           this.generateBubble(this.content, this.posX + 28, this.posY + 55);
        }*/

    }

    getPlayPos(x, y){
        this.posX = x;
        this.posY = y;
    }

    generateBubble(content, x, y){
        fill(255,255,255);
        rect(x-(this.boxWidth/2), y, this.boxWidth, 40);
        fill(0,0,0);
        text(this.content, x, y+20);
    }

}
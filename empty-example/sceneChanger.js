class SceneChanger {
    constructor(x,y,h,w,player,scene){
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
        this.player = player;
        this.scene = scene;
    }
    show(){
        fill(255);
        rect(this.x,this.y,this.w,this.h);
    }
    collision(){
        if (this.player.x < this.x + this.w &&
            this.player.x + this.player.w > this.x &&
            this.player.y < this.y + this.h &&
            this.player.y + this.player.h > this.y){
            console.log("eee");
            return true;
        }
        console.log("false")
            return false;

    }


}
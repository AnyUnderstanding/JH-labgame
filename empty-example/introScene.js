class IntroScene {
    questMaster;

    constructor(player, size) {
        this.size = size;
        this.player = player;
        this.dialog = false;
    }

    setBackground() {
        background(243, 133, 12);
    }

    draw() {
        this.player.show();
        this.player.walk();
        this.questMaster.show();
        this.collison();


    }

    setup() {
        this.questMaster = new QuestMaster(100,100,this.size,this.size);
    }
    collison() {
            if (this.player.x < this.questMaster.x + this.questMaster.w &&
                this.player.x + this.player.w > this.questMaster.x &&
                this.player.y < this.questMaster.y + this.questMaster.h &&
                this.player.y + this.player.h > this.questMaster.y) {
                this.player.dialog = true;
                this.questMaster.dialog = true;
                this.questMaster.convinced = true;

            }


    }
}
class Scene2 {
    constructor(player, size) {
        this.size = size;
        this.citzen = [];
        this.player = player;
        this.dialog = false;
        this.teleporter = 0;
    }

    setBackground() {
        background(243, 133, 12);
    }

    draw() {
        this.teleporter.show();
        this.player.show();
        this.player.walk();
        if (this.teleporter.collision()) {
            scene = 0;
        }

    }

    setup() {
        this.teleporter = new SceneChanger(400, 400, 20, 20, this.player, 0);

    }
}
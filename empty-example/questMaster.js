class QuestMaster {
    constructor(x, y, w, h, speed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.dialog = false;
    }

    show() {
        console.log(this.dialog)
        image(questMasterImg, this.x, this.y, this.w*1.5, this.h*1.5);
        if (this.dialog) {
            alert("loremipsum")
            dialog = false;
            scene = 0;

        }
    }


}
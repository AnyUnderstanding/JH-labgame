class Timer {
    constructor(duration, x, y, h, w) {
        this.duration = duration;
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
        this.satus = 0;
        this.startDuration = this.duration*2;
        this.test = this.duration;


    }

    show() {
        fill(255);
        stroke(0);
        rect(this.x, this.y, this.w, this.h);

        fill(35, 117, 250);
        rect(this.x, this.y, this.satus, this.h);
        textAlign(CENTER, CENTER);
        textSize(30);
        text(2000+this.duration, width/2, height / 2);

    }

    update() {
        if (frameCount % 60 == 0 && this.duration > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
            this.duration++;
            this.test--;
        }
        if (this.duration-1 == this.startDuration) {
            text("GAME OVER", width / 2, height * 0.7);
            return true;
        }
        this.satus = width *((this.duration-this.startDuration/2)/this.startDuration)*2;
        return false;
    }

}
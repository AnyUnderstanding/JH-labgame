class Dialog {
    selected = 0;
    key;
    max;
    correct;

    constructor(scene) {
        this.scene = scene;
    }


    showDialog(margin, head, body, list, answerIndex) {
        this.correct = answerIndex;
        this.max = list.length;
        let offsetX = window.innerWidth * margin;
        let offsetY = window.innerHeight * margin;
        fill(8, 156, 9);
        rect(offsetX / 2, offsetY / 2, window.innerWidth - window.innerWidth * margin, window.innerHeight - window.innerHeight * margin);
        this.drawList(list, head, 30, offsetX, offsetY)
    }

    drawList(list, heading, margin, offsetX, offsetY) {
        this.inputHandler(list.length)
        let hspace = margin;
        fill(255, 255, 255);
        textSize(32);
        text(heading, offsetX * 2, offsetY + hspace);
        hspace += 2 * margin;
        textSize(32);
        for (let i = 0; i < list.length; i++) {
            if (this.selected === i) {
                text("> " + list[i], offsetX, offsetY + hspace)
            } else {
                text("" + list[i], offsetX, offsetY + hspace);
            }
            hspace += margin;
        }
    }

    inputHandler(keycode) {
        if (keycode === UP_ARROW && this.selected > 0) {
            this.selected--;
        } else if (keycode === DOWN_ARROW && this.selected < this.max - 1) {
            this.selected++;

        } else if (keycode === ENTER) {
            if (this.selected === this.correct) {
                alert("right");
                convince = true;
                quiz.nextQuestion();
            } else {
                alert("wrong");
                convince = false;
            }
            this.scene.convince();
            console.log(convince)
            pauseGame = true;

            this.selected = 0;
        }
    }


}

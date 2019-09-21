class Dialog {
    selected = 0;
    key;
    max;


    showDialog(margin, head, body, list) {
        this.max = list.length;
        let offsetX = window.innerWidth * margin;
        let offsetY = window.innerHeight * margin;
        fill(0, 0, 0);
        rect(offsetX / 2, offsetY / 2, window.innerWidth - window.innerWidth * margin, window.innerHeight - window.innerHeight * margin);
        this.drawList(list, head, 30, offsetX, offsetY)
    }

    drawList(list, heading, margin, offsetX, offsetY) {
        this.inputHandler(list.length)
        let hspace = margin;

        fill(0, 102, 153);
        textSize(48);
        text(heading, offsetX, offsetY + hspace);
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
            alert("Ob du wirklich richtig stehst, siehst du wenn das Licht angeht")
            this.selected=0;
        }
    }


}

class Dialog {
    showDialog(margin, head, body, list) {
        let offsetX = window.innerWidth * margin;
        let offsetY = window.innerHeight * margin;
        fill(0, 0, 0);
        rect(offsetX / 2, offsetY / 2, window.innerWidth - window.innerWidth * margin, window.innerHeight - window.innerHeight * margin);
        this.drawList(list, 30, offsetX, offsetY)
    }

    drawList(list, margin, offsetX, offsetY) {
        textSize(32);
        let hspace = margin;
        for (let i = 0; i < list.length; i++) {
            fill(0, 102, 153);
            text(list[i], offsetX, offsetY + hspace);
            hspace += margin;
        }
    }
}
class Dialog {
    showDialog(margin, head, body, list) {
        fill(0, 0, 0);
        rect(window.innerWidth * (margin * 0.5), window.innerHeight * (margin * 0.5), window.innerWidth - window.innerWidth * margin, window.innerHeight - window.innerHeight * margin);
        this.drawList(list)
    }
    drawList(list){
        textSize(32);
        let vspace = 30;
        for (let i = 0; i<list.length;i++){
            text(list[i], 10, vspace);
            fill(0, 102, 153)
        }
    }
}
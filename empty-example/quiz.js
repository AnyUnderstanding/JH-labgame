class Quiz {
    constructor(json) {
        this.quiz = json;
        this.index = 0;
    }

    logRandomQuestion() {
        dialog.showDialog(0.25, Object.values(this.quiz)[0][this.index]['question'], null, Object.values(this.quiz)[0][this.index]['answers'], Object.values(this.quiz)[0][this.index]['correct']);
    }

    nextQuestion() {
        this.index++;
        if (this.index === Object.values(this.quiz).length) {
            console.log(Object.values(this.quiz)[0].length)
            this.index = 0;
        }
    }

}
class Quiz {
    constructor(json){
        this.quiz = json;
    }
    logRandomQuestion() {
        console.log(this.quiz)
        console.log(Object.values(this.quiz)[0])

    }

}
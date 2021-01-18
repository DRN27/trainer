const app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        listOfWords: {
            words: [
                {question: 'р_ха', answer: 'э', full: 'рЭха'},
                {question: 'к_нi', answer: 'о', full: 'кОнi'},
                {question: 'в_кны', answer: 'о', full: 'вОкны'},
                {question: 'стр_ха', answer: 'а', full: 'стрАха'},
                {question: 'н_га', answer: 'а', full: 'нАга'}
            ],
            answers: [
                {value: 'о', isCorrect: null, answersList: []}, 
                {value: 'э', isCorrect: null, answersList: []}, 
                {value: 'а', isCorrect: null, answersList: []}
            ]
        }
    }, 
    methods: {
        checkAnswer(answer, index, question) {
            const rightAnswer = this.listOfWords.words[this.counter].answer;
            const result = rightAnswer === answer.value ? 'right' : 'wrong';
            if (result === 'right') {
                this.setAnswerColor(answer, 'right');
                this.addToList(answer,index, question.full);
                if (this.counter < this.listOfWords.words.length - 1) {
                    this.counter++;
                } 
            } else {
                this.setAnswerColor(answer, 'wrong');
            }
        },
        setAnswerColor(answer, value) {
            answer.isCorrect = value;
            setTimeout(() => {
                answer.isCorrect = null;
            }, 500)
        },
        addToList(answer, index, value) {
            switch (index) {
                case 0:
                    answer.answersList.unshift(value);
                    break;
                case 1:
                    answer.answersList.unshift(value);
                    break;
                case 2:
                    answer.answersList.unshift(value);
                    break;
            }
        }
    },
});
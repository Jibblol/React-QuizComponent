import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion.jsx'
import QuizEnd from './QuizEnd.jsx'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quiz_position: 1,
            isQuizEnd: false
        }
    }
    render() {
        const isQuizEnd

        return (
            <div>
                {/* <QuizEnd /> */}
                <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}/>
            </div>
        );
    }
}

export default Quiz;
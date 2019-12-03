import React, { Component } from 'react'
import {connect} from 'react-redux'

export class Exam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultQuestion: 1,
            currentQuestionNumber: 1,
            currentQuestion: '',
            answers: [],
            selectedAnswers:[],
            selectAnswer:false,
            examone: props.questionPaper
        }
    }

    selectAnswer = (e) => {
        let examResult = this.state.examone;
        examResult[this.state.currentQuestionNumber - 1] = {
            ...examResult[this.state.currentQuestionNumber - 1],
            answerSelected:e.target.value
        }
        console.log(examResult)
        this.setState({
            selectedAnswers:examResult
        })
    }

    componentDidMount() {
        this.setState({
            currentQuestion: this.state.examone[this.state.currentQuestionNumber - 1].question,
            answers: this.state.examone[this.state.currentQuestionNumber - 1].answers
        })
    }

    nextQuestion = () => {
        if (this.state.currentQuestionNumber <= this.state.examone.length - 1) {
            this.setState({
                currentQuestionNumber: this.state.currentQuestionNumber + 1,
            }, () => {
                this.setState({
                    currentQuestion: this.state.examone[this.state.currentQuestionNumber - 1].question,
                    answers: this.state.examone[this.state.currentQuestionNumber -1].answers
                })
            })
        }
    }
    prevQuestion = () => {
        if (this.state.currentQuestionNumber > 1) {
            this.setState({
                currentQuestionNumber: this.state.currentQuestionNumber - 1,
            }, () => {
                this.setState({
                    currentQuestion: this.state.examone[this.state.currentQuestionNumber - 1].question,
                    answers: this.state.examone[this.state.currentQuestionNumber -1].answers
                })
            })
        }
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Exam</h1>
                <Question serialNumber={this.state.currentQuestionNumber}
                    question={this.state.currentQuestion}
                    answers={this.state.answers}
                    selectAnswer={this.selectAnswer}
                    totalQuestions={this.state.examone.length}
                />
                <button onClick={this.prevQuestion}
                disabled={this.state.currentQuestionNumber == 1}>Previous</button>
                <button onClick={this.nextQuestion} 
                disabled={this.state.currentQuestionNumber == this.state.examone.length}>Next</button>
                {
                    this.state.currentQuestion == this.state.examone.length ? <button>Submit</button> : null
                }
            </div>
        )
    }
}

const Question = ({ serialNumber, question, answers, selectAnswer, totalQuestions }) => {
    return (
        <div>
            <h1>Question {serialNumber}/{totalQuestions}</h1>
            <h3>Q. {question}</h3>
            {
                answers.map((answer,index) => <div key={`answer${index}`}>
                    <input type="radio" name={`question${serialNumber}`} value={index+1} onChange={selectAnswer} />
                    {answer}
                </div>
                )
            }
        </div>
    )
}

const mapStateToProps = state => ({
    questionPaper:state.preExam.questionPaper
})

export default connect(mapStateToProps, null)(Exam)

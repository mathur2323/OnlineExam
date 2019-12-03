import React, { Component } from 'react'
import {connect} from 'react-redux'
import { answerSelected } from './../actions'
import CountdownTimer from '../components/CountdownTimer';

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
            examone: props.questionPaper,
            correct:null,
            incorrect:null
        }
    }

    calculateResult = () => {
        const result = this.props.finalAnswers.filter(item => {
            if(item.correct == item.answerSelected){
                return true
            }
        })
        alert(`${result.length} correct answer${result.length <= 1 ? '' : 's'}`)
    }

    selectAnswer = (e) => {
        let examResult = this.state.examone;
        examResult[this.state.currentQuestionNumber - 1] = {
            ...examResult[this.state.currentQuestionNumber - 1],
            answerSelected:e.target.value
        }
        this.props.answerSelected(examResult)
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
        return (
            <div>
                <h1>Exam</h1>
                {
                    this.props.timer && <CountdownTimer
                    calculateResult={this.calculateResult} />
                }
                
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
                    this.state.currentQuestionNumber == this.state.examone.length ? <button onClick={this.calculateResult}>Submit</button> : null
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
    questionPaper:state.preExam.questionPaper,
    finalAnswers:state.Exam.finalAnswers,
    timer:state.preExam.timer

})

const mapDispatchToProps = dispatch => ({
    answerSelected:(reqObj)=>dispatch(answerSelected(reqObj)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Exam)

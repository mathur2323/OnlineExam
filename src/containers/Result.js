import React, { Component } from 'react'
import { connect } from 'react-redux'

class Result extends Component {
    render() {
        console.log(this.props.finalAnswers)
        return (
            <div>
                <h3>{this.props.finalResult} correct answers</h3>
                <h3>Summary</h3>
                {
                    this.props.finalAnswers && this.props.finalAnswers.map(finalAnswer => {
                        if (finalAnswer.answerSelected) {
                            return (
                                <>
                                    <h4>{finalAnswer.question}</h4>
                                    <p>{finalAnswer.answers[parseInt(finalAnswer.answerSelected) - 1]}</p>
                                </>
                            )
                        }
                        else{
                            return (
                                <>
                                    <h4>{finalAnswer.question}</h4>
                                    <p>No Answer Selected</p>
                                </>
                            )
                        }
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    finalResult: state.Exam.finalResult,
    finalAnswers: state.Exam.finalAnswers
})

export default connect(mapStateToProps, null)(Result)

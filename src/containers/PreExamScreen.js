import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {startExam} from './../actions';

class PreExamScreen extends Component {
    state = {
        skill: null,
        terms: false,
        questions: {
            one: [
                {
                    id: 1,
                    question: 'What is HTML?',
                    answers: ['A Programming Language', 'A Scripting Language', 'A Markup Language', 'None Of The Above'],
                    correct: 3
                },
                {
                    id: 2,
                    question: 'What is CSS?',
                    answers: ['A Programming Language', 'A Scripting Language', 'A Markup Language', 'Stylesheet Language'],
                    correct: 4
                },
                {
                    id: 3,
                    question: 'What is JS?',
                    answers: ['A Programming Language', 'A Scripting Language', 'A Markup Language', 'Stylesheet Language'],
                    correct: 2
                }
            ],
            two:[
                {
                    id: 1,
                    question: 'What is React?',
                    answers: ['A Programming Language', 'A Scripting Language', 'A Framework', 'A Library'],
                    correct: 4
                },
                {
                    id: 2,
                    question: 'What is Redux?',
                    answers: ['A Programming Language', 'A Scripting Language', 'A Framework', 'A Library'],
                    correct: 4
                }
            ],
            three:[
                {
                    id: 1,
                    question: 'Lorem Ipsum',
                    answers: ['Dolor', 'Sit', 'Amet'],
                    correct: 3
                },
                {
                    id: 2,
                    question: 'Lorem Ipsum Dolor',
                    answers: ['Dolor', 'Sit', 'Amet'],
                    correct: 3
                },
                {
                    id: 3,
                    question: 'Lorem Ipsum Dolor Sit',
                    answers: ['Dolor', 'Sit', 'Amet'],
                    correct: 3
                },
                {
                    id: 1,
                    question: 'Lorem Ipsum Dolor Sit Amet',
                    answers: ['Dolor', 'Sit', 'Amet'],
                    correct: 3
                }
            ]
        }
    }
    handleInput = (e) => {
        if (e.target.name !== 'terms') {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
        else {
            this.setState({
                [e.target.name]: !this.state.terms
            })
        }
    }

    startTest = () => {
        this.props.startExam(this.state.questions[this.state.skill]);
        this.props.history.push('/exam');
    }


    render() {
        return (
            <div>
                <div>
                    <h1>Exam Information</h1>
                    <h4>Exam Name - Subject</h4>
                </div>
                <div>
                    <h1>Skill Level</h1>
                    <form>
                        <input type="radio" name="skill" value="one" onChange={this.handleInput} /> Level 1
                        <input type="radio" name="skill" value="two" onChange={this.handleInput} /> Level 2
                        <input type="radio" name="skill" value="three" onChange={this.handleInput} /> Level 3
                    </form>
                </div>
                <div>
                    <input type='checkbox' name="terms" onChange={this.handleInput} /> I Accept the terms & conditions.
                    <button
                        disabled={
                            !this.state.skill || !this.state.terms
                        }
                        onClick={this.startTest}>Start</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    startExam: (reqObj)=>dispatch(startExam(reqObj))
})

export default connect(null, mapDispatchToProps)(withRouter(PreExamScreen))
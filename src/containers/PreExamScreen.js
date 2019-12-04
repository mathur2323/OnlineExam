import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {startExam} from './../actions';
import questions from './../data/questions.json';

class PreExamScreen extends Component {
    state = {
        skill: null,
        terms: false,
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
        sessionStorage.setItem("questions", true)
        this.props.startExam(questions[this.state.skill]);
        this.props.history.push('/exam');
    }

    componentDidMount(){
    
    }
    render() {
        return (
            <>
            {
                sessionStorage.getItem('isUserRegistered') ?<div>
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
            </div> : <h1>Unauthorized</h1>
            }
            </>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    startExam: (reqObj)=>dispatch(startExam(reqObj))
})

export default connect(null, mapDispatchToProps)(withRouter(PreExamScreen))
import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';

class Register extends Component {
    constructor() {
        super()
    
        this.state = {
             name:'',
             number:'',
             email:'',
             password:'',
             disabled:true
        }
    }
    
    
    handleSubmit = () => {
        sessionStorage.setItem("isUserRegistered", true)
        this.props.history.push('/pre-exam')
    }

    handleInput = (e) => {
        
        this.setState({
            [e.target.name]: e.target.value
        }, ()=>{
            if( this.state.name!=='' && this.state.number !== '' && this.state.email !== '' && this.state.password !== ''){
                this.setState({
                    disabled:false
                })
            }
            else{
                this.setState({
                    disabled:true
                })
            }
        })
    }

    render() {
        return (
            <Container className="App">
                <h2 className="text-center">Register</h2>
                <Form className="form" onSubmit={this.handleSubmit}>
                    <Col>
                        <FormGroup>
                            <Label>Name</Label>
                            <Input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                onChange={this.handleInput}
                                value={this.state.name}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Contact No.</Label>
                            <Input
                                type="number"
                                name="number"
                                placeholder="Mobile Number"
                                onChange={this.handleInput}
                                value={this.state.number}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                onChange={this.handleInput}
                                value={this.state.email}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={this.handleInput}
                                value={this.state.password}
                            />
                        </FormGroup>
                    </Col>
                    <Button color="primary" disabled={this.state.disabled}>Submit</Button>
                </Form>
            </Container>
        );
    }
}

export default Register;
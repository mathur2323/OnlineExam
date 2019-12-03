import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';

class Register extends Component {
    handleSubmit = () => {
        this.props.history.push('/pre-exam')
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
                            />
                        </FormGroup>
                    </Col>
                    <Button>Submit</Button>
                </Form>
            </Container>
        );
    }
}

export default Register;
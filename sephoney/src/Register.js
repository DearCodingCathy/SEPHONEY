import React, { Component } from 'react';
import './App.css';



import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Register extends Component {
  constructor() {
    super()

    this.state = {

    };
  }

  render() {
    return (
      <Form className='login-form'>
        <h1 className='text-center'>Welcome</h1>

        <FormGroup>
          <Label>Email:</Label> <br />
          <Input type='email' placeholder='Email' />
        </FormGroup>

        <FormGroup>
          <label>Password:</label> <br />
          <Input type='password' placeholder='Password' />
        </FormGroup>

        <Button className='btn-lg btn-dark btn-block'>Log in</Button>
      </Form>
    )
  }
}


import React, { useState } from 'react';
import { Form, Button, Col } from "react-bootstrap";
import './Login.css'
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
    }
  
    return (
      <div className="Login container">
      <Form onSubmit={handleSubmit} method="POST" >
        <Form.Group size="sm" controlId="email">
          <Form.Label >Email</Form.Label>
          <Col xs={7}>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            size="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          </Col>
        </Form.Group>
        <Form.Group size="sm" controlId="password">
          <Form.Label>Password</Form.Label>
          <Col xs={7}>
            <Form.Control
              type="password"
              value={password}
              size="text"
              width="10"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Col xs={7}>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
        </Col>
      </Form>
    </div>
    );
  }
  Login.prototype = {

  }
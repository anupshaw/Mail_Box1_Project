import React, { useImperativeHandle, useRef } from "react";
import { Card, Button, Container, Form, Row, Col } from "react-bootstrap";
import classes from "./Auth.module.css";

const AuthForm = React.forwardRef((props, ref) => {
  const InputemailRef = useRef();
  const InputpasswordRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      enteredEmail: InputemailRef.current.value,
      enteredPassword: InputpasswordRef.current.value,
    };
  });

  return (
    <Container className="mt-5 d-flex flex-column justify-content-center align-items-center">
      <Row className="text-center ">
        <Col>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>
                <h2>{props.isLogIn ? "Sign In" : "Sign Up"}</h2>
              </Card.Title>
              <Card.Text>
                <Form onSubmit={props.submitFormHandler}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      ref={InputemailRef}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      ref={InputpasswordRef}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="text-center mt-3">
        <Col>
          <Button variant="primary" onClick={props.toggleHandler}>
            {props.isLogIn
              ? `Don't have account? Sign Up`
              : `Have an account LogIn`}
          </Button>
        </Col>
      </Row>
    </Container>
  );
});

export default AuthForm;

import React from "react";
import { Card, Col, Container, Row, Form, Button } from "react-bootstrap";

const CardBS = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <Container className="align-items-center " style={{ minHeight: "50vh" }}>
      <Row className="w-100">
        <Col md={4}>
          <Card
            className="contain mb-2"
            style={{
              marginTop: "20px",
              backgroundColor: "#34474f",
              color: "black",
            }}
          >
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                  backgroundColor: "black",
                }}
              >
                Sign In
              </Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button
                  variant="success"
                  type="submit"
                  style={{ marginTop: "20px" }}
                >
                  Login
                </Button>
                <Button
                  style={{ marginLeft: "30px", marginTop: "20px" }}
                  variant="secondary"
                  type="button"
                >
                  Sign Up...
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CardBS;

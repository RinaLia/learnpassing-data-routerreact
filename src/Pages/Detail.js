import React, { Component } from "react";
import {
  Row,
  Col,
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Card,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Detail extends Component {
  render() {
    let data = {};
    const { username, email, city, country } = this.props.location.state;
    data = { username, email, city, country };

    return (
      <>
        <Container>
          <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="#home" className="text-white mt-2">
              Data
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </Container>
        <Container>
          <Card p-3>
            <Card.Header>Content</Card.Header>
            <Card.Body>
              <Card.Text>
                <Form className="form-rounded-input">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Fullname : {data.username}</Form.Label>
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email : {data.email}</Form.Label>
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Password : {data.city}</Form.Label>
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Password : {data.country}</Form.Label>
                  </Form.Group>
                  {/* <Button variant="primary" type="submit" onClick={this.goBack}>
                    Back
                  </Button> */}
                </Form>
                {/* <Table striped bordered hover>
                  <thead>
                    <tr>
                    <tr>Username</tr>
                    <tr>Email</tr>
                    <tr>City</tr>
                    <tr>Country</tr>

                    {data.username && (
                      <tr>
                        <th>{data.username}</th>
                        <th>{data.email}</th>
                        <th>{data.city}</th>
                        <th>{data.country}</th>
                      </tr>
                    )}
                  </thead>
                </Table> */}
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </>
    );
  }
}

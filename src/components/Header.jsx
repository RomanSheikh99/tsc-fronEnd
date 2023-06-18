import moment from "moment/moment";
import React, { useState } from "react";
import { Button, Card, Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
    
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
      <Card.Subtitle className="mb-2 text-white">{moment().format('dddd, Do MMMM YYYY, h:mm:ss a')}</Card.Subtitle>
        <Nav className="ms-auto">
          <Button variant="outline-light">English</Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Large from "./LargeSide/Aside";
import Small from "./SmallSide/Aside";

const Main = () => {
  return (
    <Container style={{marginTop: '20px'}}>
      <Row>
        <Col xs={12} md={10} >
          <Large />
        </Col>
        <Col>
          <Small />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;

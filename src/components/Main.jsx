import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import InfoDesk from "./InfoDesk";
import HeadLine from "./HeadLine";
import NoticBoard from "./NoticBoard";
import News from "./News";
import Services from "./Services";
import VideoGallery from "./VideoGallery";
import PhotoGallery from "./PhotoGallery";

const Main = () => {
  return (
    <Container style={{ marginTop: "20px" }}>
      <Row>
        <Col xs={12} md={9}>
          <HeadLine />
          <NoticBoard />
          <News />
          <Services />
          <VideoGallery />
          <PhotoGallery />
        </Col>
        <Col xs={12} md={3}>
          <InfoDesk />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;

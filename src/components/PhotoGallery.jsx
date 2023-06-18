import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const PhotoGallery = () => {
  const photos = [
    {
      Galleryphoto:
        "https://satkhiratsc.gov.bd/200391/200391_media/gallery/MC_1638889423_2021-12-07.jpg",
    },
    {
      Galleryphoto:
        "https://satkhiratsc.gov.bd/200391/200391_media/gallery/MC_1638889115_2021-12-07.jpg",
    },
  ];
  return (
    <div>
      <h4 className="video-title"> Photo Gallery</h4>
      <div style={{ marginBottom: "10px" }}>
        <Row>
          {photos.map((photo, i) => {
            return (
              <Col key={i} style={{ marginBottom: "10px" }} sm={6}>
                <div className="">
                  <Row>
                    <Col sm={2}>
                      <img width={"350px"} src={photo.Galleryphoto} alt="" />
                    </Col>
                    <Col sm={10}></Col>
                  </Row>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
      <div className="noticeBtn mb-4">
        <Button>Explore More</Button>
      </div>
    </div>
  );
};

export default PhotoGallery;

import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const VideoGallery = () => {
  const videos = [
    {
      youtubeVideo: (
        <iframe
          width="310"
          height="250"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
      ),
    },
    {
      youtubeVideo: (
        <iframe
          width="310"
          height="250"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
      ),
    },
  ];
  return (
    <div>
      <h4 className="video-title">Video Gallery</h4>
      <div style={{ marginBottom: "10px" }}>
        <Row>
          {videos.map((video, i) => {
            return (
              <Col key={i} sm={6}>
                <div className="singleService">
                  <Row>
                    <Col sm={2}>{video.youtubeVideo}</Col>
                    <Col sm={10}></Col>
                  </Row>
                </div>
              </Col>
            );
          })}
        </Row>
        <div className="noticeBtn">
          <Button>Explore More</Button>
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;

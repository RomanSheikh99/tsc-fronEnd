import React from 'react';
import { Col, Row } from 'react-bootstrap';

const SingleVieoGallery = ({video}) => {
    const {youtubeVideo} = video;
    return (
        <Col sm={6}>
        <div className="singleService">
          <h3 className="title"></h3>
          <Row>
            <Col sm={2}>
           {youtubeVideo}
            </Col>
            <Col sm={10}>
            
            </Col>
          </Row>
        </div>
      </Col>
    );
};

export default SingleVieoGallery;
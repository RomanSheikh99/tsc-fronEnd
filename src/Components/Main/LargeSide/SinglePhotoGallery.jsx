import React from 'react';
import { Col, Row } from 'react-bootstrap';

const SinglePhotoGallery = ({photo}) => {
    const{Galleryphoto} = photo;
    return (
        <Col style={{marginBottom: '10px'}} sm={6}>
        <div className="">
  
          <Row>
            <Col sm={2}>
          <img width={'350px'} src={Galleryphoto} alt="" />
            </Col>
            <Col sm={10}>
            
            </Col>
          </Row>
        </div>
      </Col>
    );
};

export default SinglePhotoGallery;
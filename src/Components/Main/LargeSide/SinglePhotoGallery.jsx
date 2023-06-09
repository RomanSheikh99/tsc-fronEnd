import React from 'react';
import { Col, Row } from 'react-bootstrap';

const SinglePhotoGallery = ({photo}) => {
    const{Galleryphoto} = photo;
    return (
        <Col style={{marginBottom: '10px'}} sm={6}>
        <div className="">
          <h3 className="title"></h3>
          <Row>
            <Col sm={2}>
          <img width={'380px'} src={Galleryphoto} alt="" />
            </Col>
            <Col sm={10}>
            
            </Col>
          </Row>
        </div>
      </Col>
    );
};

export default SinglePhotoGallery;
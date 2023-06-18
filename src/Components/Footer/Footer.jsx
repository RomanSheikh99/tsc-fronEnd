import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className=''>
            <img className='' src="https://satkhiratsc.gov.bd/core_media/themes/responsive_npf/images/footer_top_bg.png" alt="" />
            <Row className='footer'>
                <Col xs={12} sm={6} >
                   <div>
                    <h3>hello</h3>
                   </div>
                </Col>
                <Col xs={12} sm={6}>
                <div className='float-sm-start float-md-end'>
                    <h3>hello</h3>
                   </div>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;
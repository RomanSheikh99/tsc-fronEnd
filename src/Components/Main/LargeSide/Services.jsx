import React from 'react';
import { Row } from 'react-bootstrap';
import SingleService from './SingleService';

const Services = () => {
    const data=[1,2,3,4,5,6]
    return (
        <div style={{marginTop: '20px'}}>
            <Row>
                {data.map(d=>{
                    return(<SingleService />)
                })}
            </Row>
        </div>
    );
};

export default Services;
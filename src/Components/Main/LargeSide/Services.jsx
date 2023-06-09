import React from 'react';
import { Row } from 'react-bootstrap';
import SingleService from './SingleService';
import { GiBookCover } from 'react-icons/gi';

const Services = () => {
    const services=[
        {
            name: 'Admission/Registration',
            ssc:<a>SSC</a>,
            hsc:<a>SSC</a>,
            others:<a>Others</a>,
            icon:<GiBookCover color="purple" style={{fontSize: "80px"}} />     
        },
        {
            name: 'Office Order / NOC',
            ssc:<a>NOC</a>,
            hsc:<a>Office Order</a>,
            others:<a>Others</a>,
            icon:<GiBookCover color="purple" style={{fontSize: "80px"}} />     
        },
        {
            name: 'Natinal Integrity Strategy',
            ssc:<a>
            Natinal Integrity Strategy</a>,
            hsc:<a>Work Plan</a>,
            others:<a>Implementation Committee</a>,
            icon:<GiBookCover color="purple" style={{fontSize: "80px"}} />     
        },
        {
            name: 'Download',
            ssc:<a>
            Prospectus and Other</a>,
            icon:<GiBookCover color="purple" style={{fontSize: "80px"}} />     
        },
        {
            name: 'Right to Information',
            ssc:<a>Right to info. and appeals officer</a>,
            hsc:<a>
            Form</a>,
            others:<a>Others</a>,
            icon:<GiBookCover color="purple" style={{fontSize: "80px"}} />     
        },
        {
            name: 'Annual Performance Agreement',
            icon:<GiBookCover color="purple" style={{fontSize: "80px"}} />     
        },
    ]
    return (
        <div style={{marginTop: '15px', marginBottom:'20px'}}>
            <Row>
                {services.map((service,i)=>{
                    return(<SingleService
                    key={i}
                        service={service} />)
                })}
            </Row>
        </div>
    );
};

export default Services;
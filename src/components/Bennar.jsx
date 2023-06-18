import React from 'react';
import { Image } from 'react-bootstrap';

const Bennar = () => {
    return (
        <div className='bennar'>
            <Image style={{maxWidth: '80px', marginRight: '15px'}} src="image/bteb.png" roundedCircle />
            <h1 className='h3 text-white text-capitalize'>habiganj technical school and college</h1>
        </div>
    );
};

export default Bennar;
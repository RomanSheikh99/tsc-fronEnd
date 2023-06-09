import React from 'react';
import { Button } from 'react-bootstrap';

const News = () => {
    return (
        <div className='news'>
            <h2 className="title">news : </h2>
            <p className='body'></p>
            <div className="button">
            <Button variant="primary">all</Button>
            </div>
        </div>
    );
};

export default News;
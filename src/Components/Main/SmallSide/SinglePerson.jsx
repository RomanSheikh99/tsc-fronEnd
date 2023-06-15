import { Button } from 'bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SinglePerson = ({person}) => {
    const {name,photo,title,details} = person
    return (
        <div className='text-center'>
             <h4 className='person-name'>{name}</h4>
             <img src={photo} className='' width={"220px"} alt="" />
             <h3 className='person-title'>{title}</h3>
             <div className='person-link'>
             <Link to={`/${details}`} target='_blank'>Details</Link>
             </div>
        </div>
    );
};

export default SinglePerson;
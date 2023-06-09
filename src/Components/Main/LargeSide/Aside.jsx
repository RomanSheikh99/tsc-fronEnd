import React from 'react';
import HeadLine from './HeadLine';
import NoticBoard from './NoticBoard';
import News from './News';
import Services from './Services';

const Aside = () => {
    return (
        <div>
            <HeadLine />
            <NoticBoard />     
            <News />     
            <Services />
        </div>
    );
};

export default Aside;
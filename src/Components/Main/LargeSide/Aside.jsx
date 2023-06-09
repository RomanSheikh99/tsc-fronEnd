import React from 'react';
import HeadLine from './HeadLine';
import NoticBoard from './NoticBoard';
import News from './News';
import Services from './Services';
import VideoGallery from './VideoGallery';
import PhotoGallery from './PhotoGallery';

const Aside = () => {
    return (
        <div>
            <HeadLine />
            <NoticBoard />     
            <News />     
            <Services />
            <VideoGallery></VideoGallery>
            <PhotoGallery></PhotoGallery>
        </div>
    );
};

export default Aside;
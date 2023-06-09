import React from 'react';
import { Button, Row } from 'react-bootstrap';
import SinglePhotoGallery from './SinglePhotoGallery';

const PhotoGallery = () => {
    const photos = [
        {
           Galleryphoto:'https://satkhiratsc.gov.bd/200391/200391_media/gallery/MC_1638889423_2021-12-07.jpg'
          
        },
        {
            Galleryphoto:'https://satkhiratsc.gov.bd/200391/200391_media/gallery/MC_1638889115_2021-12-07.jpg'
        }
    ]
    return (
        <div>
            <h4 className='video-title'> Photo Gallery</h4>
            <div style={{marginBottom: '10px'}}>
            <Row>
                {photos.map((photo,i)=>{
                    return(<SinglePhotoGallery
                    key={i}
                    photo={photo} />)
                })}
            </Row>
        </div>
        <div className="noticeBtn">
                    <Button>Explore More</Button>
                </div>
        </div>
    );
};

export default PhotoGallery;
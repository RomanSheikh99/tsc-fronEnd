import React from 'react';
import { Row } from 'react-bootstrap';
import SingleVieoGallery from './SingleVieoGallery';
import SinglePhotoGallery from './SinglePhotoGallery';

const PhotoGallery = () => {
    const photos = [
        {
           Galleryphoto:<iframe width="350" height="250" src="https://www.youtube.com/embed/tgbNymZ7vqY">
           </iframe>,
          
        },
        {
            Galleryphoto:<iframe width="350" height="250" src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
        }
    ]
    return (
        <div>
            <h4 className='video-title'>Video Gallery</h4>
            <div style={{marginTop: '5px'}}>
            <Row>
                {photos.map((photo,i)=>{
                    return(<SinglePhotoGallery
                    key={i}
                    photo={photo} />)
                })}
            </Row>
        </div>
        </div>
    );
};

export default PhotoGallery;
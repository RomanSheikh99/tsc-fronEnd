import React from 'react';
import { Row } from 'react-bootstrap';
import SingleVieoGallery from './SingleVieoGallery';

const VideoGallery = () => {
    const videos = [
        {
           youtubeVideo:<iframe width="350" height="250" src="https://www.youtube.com/embed/tgbNymZ7vqY">
           </iframe>,
          
        },
        {
            youtubeVideo:<iframe width="350" height="250" src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
        }
    ]
    return (
        <div>
            <h4 className='video-title'>Video Gallery</h4>
            <div style={{marginTop: '5px'}}>
            <Row>
                {videos.map((video,i)=>{
                    return(<SingleVieoGallery
                    key={i}
                    video={video} />)
                })}
            </Row>
        </div>
        </div>
    );
};

export default VideoGallery;
import React from 'react';
import './YouTubeEmbed.scss';

const YouTubeEmbed = ({ embedId }) => {
    return (
        <div className="video-responsive">
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded YouTube Video"
            />
        </div>
    );
};

export default YouTubeEmbed;
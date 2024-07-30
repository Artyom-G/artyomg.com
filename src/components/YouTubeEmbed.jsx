import React from 'react';
import './YouTubeEmbed.scss';

const YouTubeEmbed = ({ embedId }) => {
    return (
        <div className="youtube-embed">
            <iframe
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
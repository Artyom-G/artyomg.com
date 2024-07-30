import React from 'react';
import './IFrameEmbed.scss';

const IFrameEmbed = ({ src, width, height, scrolling='no' }) => {
    return (
        <div className="iframeembed">
            <iframe className="iframeembed__iframe" src={src} width={width} height={height} frameborder='0' scrolling={scrolling}></iframe>
            <div className="iframeembed__bigger-display-message">
                <p>This Page Has an Iteractive Element, Please Use a Bigger Screen</p>
            </div>
        </div>
    );
};

export default IFrameEmbed;
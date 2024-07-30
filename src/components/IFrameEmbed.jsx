import React from 'react';
import { useState } from 'react';
import './IFrameEmbed.scss';

const IFrameEmbed = ({ src, width, height, scrolling='no' }) => {
    const [overlayActive, setOverlayActive] = useState(true);
    
    return (
        <div className="iframeembed">
            <div className={`${overlayActive ? 'iframeembed__overlay' : 'iframeembed__overlay__disabled'}`} onClick={() => setOverlayActive(false)} style={{width: width, height: height}}>
                Click Me
            </div>
            <iframe className="iframeembed__iframe" src={src} width={width} height={height} frameborder='0' scrolling={scrolling}></iframe>
            <div className="iframeembed__bigger-display-message">
                <p>This Page Has an Iteractive Element, Please Use a Bigger Screen</p>
            </div>
        </div>
    );
};

export default IFrameEmbed;
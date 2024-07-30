import React from 'react'; 
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import YouTubeEmbed from './YouTubeEmbed';
import ImageEmbed from './ImageEmbed';
import IFrameEmbed from './IFrameEmbed';
import './MarkdownCustom.scss'; 

export const MarkdownCustom = ({ content }) => {
    return (
        <div className='md'>
            <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                components={{
                    youtube: ({ embedid }) => <YouTubeEmbed embedId={embedid} />,
                    picture: ({ src, alt }) => <ImageEmbed src={src} alt={alt} />,
                    embed: ({ src, width, height }) => <IFrameEmbed src={src} width={width} height={height} />
                }}
                disallowedElements={[]}
                unwrapDisallowed={true}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
};
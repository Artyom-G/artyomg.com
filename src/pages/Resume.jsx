import React from 'react';
import resumePdf from '../assets/resume.pdf';
import './Resume.scss';

const Resume = () => {
    return (
        <div className='page'>
            <div className='page__resumePdf'>
                <embed src={resumePdf} type="application/pdf"/>
            </div>
        </div>
    );
};

export default Resume;
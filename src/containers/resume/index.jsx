import React from 'react';
import resumePdf from './resume.pdf';
import './styles.scss';

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
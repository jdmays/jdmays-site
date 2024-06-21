import React from 'react';
import works from '../data/work';
import ResumeJob from './ResumeJob';

const ResumeJobsList = () => {
    return (
        <div className="max-w-2xl mx-auto">
            {works.map((work, index) => (
                <ResumeJob key={index} work={work} />
            ))}
        </div>
    );
}

export default ResumeJobsList;

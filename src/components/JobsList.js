import React from 'react';
import works from '../data/work';
import Job from './Job';

const JobsList = () => {
    return (
        <div className="max-w-2xl mx-auto">
            {works.map((work, index) => (
                <Job key={index} work={work} />
            ))}
        </div>
    );
}

export default JobsList;

import React from 'react';

import work from '../data/work';

const ResumeExperience = () => (
    <div>
        {work.map((job, index) => (
            <div key={index}>
                <h4 className="text-md font-semibold mx-4 mt-2">{job.company}</h4>
                <p className="text-sm text-gray-600 mx-4">{job.position} | {job.startYear} - {job.endYear}</p>
                <ul className="list-disc list-inside text-sm mx-8">
                    {job.highlights.map((highlight, idx) => (
                        <li key={idx} className="mt-1">{highlight}</li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
);

export default ResumeExperience;

import React from 'react';
import works from '../data/work';

const JobsList = () => {
    return (
        <div>
            {works.map((work, index) => (
                <div key={index} className="p-4 border-b">
                    <h2 className="text-xl font-bold">{work.company}</h2>
                    <p className="text-md">{work.position} | {work.startYear} - {work.endYear}</p>
                    <ul className="list-disc list-inside text-sm mx-8">
                        {work.highlights.map((highlight, idx) => (
                            <li key={idx} className="mt-1">{highlight}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default JobsList;

import React from 'react';
import works from '../data/work';

const JobsList = () => {
    return (
        <div>
            {works.map((work, index) => (
                <div key={index} className="p-4 border-b">
                    <h2 className="text-xl font-bold">{work.company}</h2>
                    <p className="text-md font-semibold my-1">{work.position} | {work.startYear} - {work.endYear}</p>
                    <p className={"text-md text-gray-600 italic"}>
                        {work.comment}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default JobsList;

import React from 'react';
import degrees from '../data/degrees';
import Degree from './Degree';

const DegreesList = () => {
    return (
        <div className="max-w-2xl mx-auto">
            {degrees.map((degree, index) => (
                <Degree key={index} degree={degree} />
            ))}
        </div>
    );
}

export default DegreesList;

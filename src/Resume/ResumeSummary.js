import React from 'react';

const summaryText = `Dynamic professional with over two decades of experience in 
healthcare and technology sectors. Proven leader in strategic 
planning, software development, and team management. Expert in 
enhancing software usability and driving business growth through 
innovative solutions and a deep understanding of user needs.`;

const ResumeSummary = () => (
    <div>
        <h3 className="text-lg font-semibold mb-2">Summary</h3>
        <p className="text-sm leading-relaxed">{summaryText}</p>
    </div>
);

export default ResumeSummary;
;
import React from "react";
import degrees from "../data/degrees";

const DegreesList = () => {
  return (
      <div>
        {degrees.map((degree, index) => (
            <div key={index} className="max-w-2xl mx-auto">
              <h2 className="text-xl font-bold">{degree.degree}</h2>
              <p className="text-sm text-gray-500">{degree.school}, {degree.year}</p>
            </div>
        ))}
      </div>
  );
};

export default DegreesList;

import React from "react";
import degrees from "../data/degrees";

const DegreesList = () => {
  return (
      <div>
        {degrees.map((degree, index) => (
            <div key={index} className="max-w-2xl my-3">
              <h2 className="font-bold">{degree.degree}</h2>
              <p className="text-sm italic font-semibold">{degree.school}, {degree.year}</p>
            </div>
        ))}
      </div>
  );
};

export default DegreesList;

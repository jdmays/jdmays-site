import React from 'react';
import schedules from '../../data/cafe/schedules';

const CafeScheduleList = () => {
    return (
      <div>
        {schedules.map((schedule, index) => (
          <div key={index} className="p-4 border-b">
            <p className="text-md font-semibold my-1">{schedule.month} {schedule.dom}{schedule.suffix}</p>
            {schedule.location && (
              <p className={"text-md text-gray-600 italic py-1"}>
                Meeting at {schedule.location} at 6:00 pm
              </p>
            )}
            <p className={"text-md text-gray-600 italic"}>{schedule.info}</p>
          </div>
        ))}
      </div>
    );
}

export default CafeScheduleList;

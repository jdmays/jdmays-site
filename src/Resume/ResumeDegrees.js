
import degrees from '../data/degrees';

const ResumeDegrees = () => (
    <div>
        {degrees.map((degree, index) => (
            <div key={index}>
                <h4  className="text-md font-semibold mx-4">{degree.degree}</h4>
                <p className="text-sm text-gray-600 mx-4">{degree.school}, {degree.year}</p>
            </div>
        ))}
    </div>
);

export default ResumeDegrees;

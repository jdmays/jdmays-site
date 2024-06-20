
const Degree = ({ degree }) => {
    return (
        <div className="p-4 border-b">
            <h2 className="text-xl font-bold">{degree.school}</h2>
            <p className="text-md">{degree.degree}</p>
            <a href={degree.link} className="text-blue-500">{degree.link}</a>
            <p className="text-sm text-gray-500">{degree.year}</p>
        </div>
    );
}

export default Degree;

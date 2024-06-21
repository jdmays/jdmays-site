
const ResumeJob = ({ work }) => {
    return (
        <div className="p-4 border-b">
            <h4 className="text-md font-semibold">{work.company}</h4>
            <p className="text-sm text-gray-600">{work.position} | {work.startYear} to {work.endYear}</p>
            <p className="text-md">{work.summary}</p>
            <p className="text-md">{work.start} to {work.end}</p>
        </div>
    );
}

export default ResumeJob;

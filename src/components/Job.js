
const Job = ({ work }) => {
    return (
        <div className="p-4 border-b">
            <h2 className="text-xl font-bold">{work.name}</h2>
            <p className="text-md">{work.position}</p>
            <p className="text-md">{work.summary}</p>
            <p className="text-md">{work.start} to {work.end}</p>
        </div>
    );
}

export default Job;

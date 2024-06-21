
const ResumeTechSkill = ({ skill }) => {
    return (
        <div className="p-4 border-b">
            <h2 className="text-xl font-bold">Skill: {skill.title}</h2>
            <p className="text-md">Competency Level: {skill.competency}</p>
            <p className="text-md">Years: {skill.years}</p>
        </div>
    );
}

export default ResumeTechSkill;

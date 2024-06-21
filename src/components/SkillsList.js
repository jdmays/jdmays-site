import skills from '../data/skills';

const SkillsList = () => {
  return (
      <div className={"container mx_auto p-4"}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold">{skill.title}</h2>
              <p className="text-md">Competency Level: {skill.competency}</p>
              <p className="text-md">Years: {skill.years}</p>
            </div>
        ))}
      </div>
      </div>
  );
};

export default SkillsList;

import skills from '../data/skills';

const SkillsList = () => {
  return (
    <div>
      {skills.map((skill, index) => (
        <div key={index} className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold">{skill.title}</h2>
            <p className="text-md">Competency Level: {skill.competency}</p>
            <p className="text-md">Years: {skill.years}</p>
        </div>
      ))}
    </div>
  );
};

export default SkillsList;

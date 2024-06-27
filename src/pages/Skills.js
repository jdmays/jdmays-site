
import SkillsList from "../components/SkillsList";

const Skills = () => {
    return (
        <div className="bg-purple-100 text-gray-800 min-h-screen">
            <div className="container mx-auto py-10 px-5">
                <h1 className="text-3xl font-bold mb-5">Skills</h1>
                <div className="border-t border-purple-900 my-4"></div>
                <p className="text-md text-gray-600 my-2">
                    I've done a lot of different things throughout the years. When I first started the World Wide Web was becoming
                    a huge thing. This allowed me to take on challenges like setting up web servers and mail servers with Linux, writing Perl scripts to
                    parse text and make web pages interactive and dynamic, and writing programs with Visual Basic
                    (V3.0). The last several years I've worked a lot with Laravel/PHP, MySql, and Jquery or Javascript.
                </p>
                <p className="text-md text-gray-600 my-2">
                    I've included a self-assessment of my competency level. It's on a scale of 1-5 with 5 being the highest level. I've done a
                    lot over the past several years, but if I haven't used a specific skill in the last 5 years or so, I don't want to portray myself as an
                    expert at that thing.
                </p>

                <div className="border-t border-purple-900 my-2"></div>
                <SkillsList/>
            </div>
        </div>
    )
}
export default Skills

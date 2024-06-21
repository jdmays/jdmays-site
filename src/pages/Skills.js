
import SkillsList from "../components/SkillsList";

const Skills = () => {
    return (
        <div className="bg-purple-100 text-gray-800 min-h-screen">
            <div className="container mx-auto py-10 px-5">
                <h1 className="text-3xl font-bold mb-5">Skills</h1>
                <div className="border-t border-purple-900 my-4"></div>
                <p className="text-md text-gray-600 my-2">
                    I've done a lot of different things throughout the years. Back when the World Wide Web was becoming
                    a huge thing, I was busy setting up web servers and mail servers with Linux, writing Perl scripts to
                    parse text and make web pages interactive and dynamic, and writing programs with Visual Basic
                    (V3.0). The last several years I've worked a lot with Laravel/PHP, MySql, and Jquery or Javascript. Before
                    that, I wrote quite a few stored procedures and I even wrote a program using Visual Basic and SQLite.
                </p>
                <p className="text-md text-gray-600 my-2">
                    I've included my own self-assessment of my competency level because I'm not an expert in every single thing
                    and I want to be up front about that.  It's my own estimate on a scale of 1-5 with 5 being the highest level. Mostly
                    this is because I haven't used that particular thing much in the last 5 years or so and may have forgotten a lot of it.
                </p>

                <div className="border-t border-purple-900 my-2"></div>
                <SkillsList/>
            </div>
        </div>
    )
}
export default Skills

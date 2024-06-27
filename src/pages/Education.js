
import DegreesList from '../components/DegreesList'; // Adjust the path as needed

const Education = () => {
    return (
        <div className="bg-purple-100 text-gray-800 min-h-screen">
            <div className="container mx-auto py-10 px-1">
                <h1 className="text-3xl font-bold mb-5">Education</h1>
                <div className="border-t border-purple-900 my-4"></div>
                <p className="text-md text-gray-600 my-2 text-left">
                    My degrees are obviously not in Computer Science or a related field. I've been asked why I didn't
                    pursue computer science
                    right after high school. In 1982, it was a totally different field than it is now and the type of
                    jobs I would ultimately have
                    hadn't been invented yet. How many people can say they used an Apple II or owned a Commodore 64 with
                    the 128K expansion module?
                </p>
                <div className="border-t border-purple-900 my-4"></div>
                <DegreesList/>
            </div>
        </div>
    );
}

export default Education;

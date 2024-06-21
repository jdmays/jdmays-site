
import DegreesList from '../components/DegreesList'; // Adjust the path as needed

const Education = () => {
    return (
        <div className="bg-purple-100 text-gray-800 min-h-screen">
            <div className="container mx-auto py-10 px-1">
                <h1 className="text-3xl font-bold mb-5">Education</h1>
                <div className="border-t border-purple-900 my-4"></div>
                <p className="text-md text-gray-600 my-2">
                    I've already mentioned in About (The TLDR Version) how I ended up going into the field of Psychology.
                </p>
                <div className="border-t border-purple-900 my-4"></div>
                <DegreesList/>
            </div>
        </div>
    );
}

export default Education;

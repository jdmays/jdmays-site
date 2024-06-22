
import DegreesList from '../components/DegreesList'; // Adjust the path as needed

const Education = () => {
    return (
        <div className="bg-purple-100 text-gray-800 min-h-screen">
            <div className="container mx-auto py-10 px-1">
                <h1 className="text-3xl font-bold mb-5">Education</h1>
                <div className="border-t border-purple-900 my-4"></div>
                <p className="text-md text-gray-600 my-2">
                    21 year old me did not realize how much I loved writing software.  But to be fair, the work I do
                    today didn't really exist back then. In the meantime, I earned a few degrees in Psychology.
                </p>
                <div className="border-t border-purple-900 my-4"></div>
                <DegreesList/>
            </div>
        </div>
    );
}

export default Education;

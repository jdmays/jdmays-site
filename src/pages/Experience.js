
import JobsList from "../components/JobsList";

const Experience = () => {
    return (
        <div className="bg-purple-100 text-gray-800 min-h-screen">
            <div className="container mx-auto py-10 px-5">
                <h1 className="text-3xl font-bold mb-5">Experience</h1>
                <div className="border-t border-purple-900 my-4"></div>
                <p className="text-md text-gray-600 my-2">
                    I've had two successful careers involving a great deal of responsibility and domain specific
                    knowledge.
                </p>
                <p className="text-md text-gray-600 my-2">
                    (This is an abridged version of my resume.  The full resume may be downloaded from the sidebar.)
                </p>
                <div className="border-t border-purple-900 my-4"></div>
                <JobsList/>
            </div>
        </div>
    )
}
export default Experience

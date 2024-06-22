
import JobsList from "../components/JobsList";

const Experience = () => {
    return (
        <div className="bg-purple-100 text-gray-800 min-h-screen">
            <div className="container mx-auto py-10 px-5">
                <h1 className="text-3xl font-bold mb-5">Experience</h1>
                <div className="border-t border-purple-900 my-4"></div>
                <p className="text-md text-gray-600 my-2">
                    There are two careers buried in my experience. The first was being a Counselor and later an executive in the mental health field.
                    But for almost 20 years now, I've been a software developer. Both fields are about solving problems and viewing things as
                    part of a system.
                </p>

                <div className="border-t border-purple-900 my-4"></div>
                <JobsList/>
            </div>
        </div>
    )
}
export default Experience


import JobsList from "../components/JobsList";

const Experience = () => {
    return (
        <div className="bg-purple-100 text-gray-800 min-h-screen">
            <div className="container mx-auto py-10 px-5">
                <h1 className="text-3xl font-bold mb-5">Experience</h1>
                <div className="border-t border-purple-900 my-4"></div>
                <p className="text-md text-gray-600 my-2">
                    There are two careers buried in my experience. Back when I was a Counselor, when I told people
                    what I did for a living, they would often look at me funny as if trying to wrap their head around me
                    as one of those touchy-feely individuals who often gravitate toward the helping professions.
                </p>
                <p className="text-md text-gray-600 my-2">
                    I was good at my job but I was more of a diagnostician - more like a Psychologist than a Therapist.
                    Today, when I tell people what I do for work, there is no look of disbelief.  It all makes perfect sense.
                </p>

                <div className="border-t border-purple-900 my-4"></div>
                <JobsList/>
            </div>
        </div>
    )
}
export default Experience

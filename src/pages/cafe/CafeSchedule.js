
import CafeScheduleList from "../../components/cafe/CafeScheduleList";

const CafeSchedule = () => {
    return (
        <div className="bg-purple-100 text-gray-800 min-h-screen">
            <div className="container mx-auto py-10 px-5">
                <h1 className="text-3xl font-bold mb-5">Schedule</h1>
                <div className="border-t border-purple-900 my-4 w-full"></div>
                <p className="text-lg text-gray-600 my-2">
                    Please be sure to leave us your email address in case we need to change the meeting day or location.
                </p>

                <CafeScheduleList/>

                <div className="border-t border-purple-900 my-4 w-full"></div>
            </div>
        </div>
    )
}
export default CafeSchedule

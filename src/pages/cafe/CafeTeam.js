
import CafeTeamList from "../../components/cafe/CafeTeamList";

const CafeTeam = () => {
    return (
        <div className="bg-purple-100 text-gray-800 min-h-screen">
            <div className="container mx-auto py-10 px-5">
                <h1 className="text-3xl font-bold mb-5">The Team</h1>
                <div className="border-t border-purple-900 my-4 w-full"></div>
                <p className="text-lg text-gray-600 my-2">
                    In addition to the volunteers listed below, there are people from one of several churches in the community who
                    help by providing and serving the food.
                </p>

                <CafeTeamList/>

                <div className="border-t border-purple-900 my-4 w-full"></div>
            </div>
        </div>
    )
}
export default CafeTeam

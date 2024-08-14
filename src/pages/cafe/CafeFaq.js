
import CafeQuestionsList from "../../components/cafe/CafeQuestionsList";

const CafeFaq = () => {
    return (
        <div className="bg-purple-100 text-gray-800 min-h-screen">
            <div className="container mx-auto py-10 px-5">
                <h1 className="text-3xl font-bold mb-5">Frequently Asked Questions</h1>
                <div className="border-t border-purple-900 my-4 w-full"></div>
                <p className="text-xl text-gray-600 font-semibold my-2">
                   Frequently asked questions about the Rockford International Cafe.
                </p>

                <CafeQuestionsList/>

                <div className="border-t border-purple-900 my-4 w-full"></div>
            </div>
        </div>
    )
}
export default CafeFaq

import CafeNavbar from '../components/cafe/CafeNavbar';
import CafeSidebar from '../components/cafe/CafeSidebar';
import CafeContent from '../components/cafe/CafeContent';


const CafeLayout = () => {
    return (
        <div id="wrapper" className="flex flex-col min-h-screen bg-purple-100">
            <CafeNavbar />
            <div className="flex flex-grow bg-purple-100">
                <CafeSidebar />
                <CafeContent />
                {/*<div className="w-full md:w-3/4 bg-purple-100">*/}
                {/*    <Content />*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default CafeLayout;

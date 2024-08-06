import { Outlet } from 'react-router-dom';

const CafeContent = () => {
    return (
        <div className="h-full w-full bg-purple-100 text-black py-8 px-5">
           <Outlet />
        </div>
    );
}

export default CafeContent;

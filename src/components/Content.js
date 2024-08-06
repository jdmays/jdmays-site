import { Outlet } from 'react-router-dom';

const Content = () => {
    return (
        <div className="h-full mt-14 w-3/5 bg-purple-100 text-black">
           <Outlet />
        </div>
    );
}

export default Content;

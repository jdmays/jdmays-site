import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';

const Layout = () => {
    return (
        <div id="wrapper" className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex flex-grow">
                <Sidebar />
                <Content />
            </div>
        </div>
    );
}

export default Layout;

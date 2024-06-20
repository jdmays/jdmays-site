import {Link, NavLink} from "react-router-dom";
import routes from '../data/routes';

const Navbar = () => {
    return (

        <header className="fixed top-0 left-0 w-full bg-white bg-opacity-75 backdrop-blur-md shadow-md z-50">
            <nav className="mx-auto px-6 py-3 bg-gradient-to-r from-purple-900 to-indigo-900">
                <div className="flex items-center justify-between">
                    <div className="text-xl font-bold px-4">
                        {
                            routes.filter((l) => l.index).map((l) => (
                                <Link key={l.label} to={l.path}>{l.label}</Link>
                            ))
                        }
                    </div>
                    <div className="space-x-4">
                        {
                            routes.filter((l) => !l.index).map((l) => (
                                <NavLink to={l.path} className="text-white-800 hover:text-orange-400 navlinks">{l.label}</NavLink>
                            ))
                        }
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;

import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Navigation = () =>
{
    return (
        <div className="max-w-7xl mx-auto flex flex-col  min-h-screen">
            <div className="bg-cyan-500 w-20 rounded-full mx-auto my-2 md:hidden text-center p-1"><Link to='/'>Home</Link></div>
            <div className="sm:hidden md:block"><Header /></div>
                 <div className="flex-1"><Outlet/></div>                         
            <div className="sm:hidden md:block"><Footer /></div>
        </div>
    );
};

export default Navigation;
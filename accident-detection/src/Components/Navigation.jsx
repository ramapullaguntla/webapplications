import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Navigation = () =>
{
    return (
        <div className="max-w-7xl mx-auto flex flex-col  min-h-screen">           
            <div><Header /></div>
                 <div className="flex-1"><Outlet/></div>                         
            <div className=" xs:hidden sm:hidden md:block"><Footer /></div>
        </div>
    );
};

export default Navigation;
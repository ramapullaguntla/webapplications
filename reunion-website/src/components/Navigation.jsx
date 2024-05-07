import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Navigation = () =>
{
    return (
        <div className="max-w-7xl mx-auto flex flex-col  min-h-screen">
            <Header />
                 <div className="flex-1"><Outlet/></div>                         
            <div><Footer /></div>
        </div>
    );
};

export default Navigation;
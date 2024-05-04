import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Navigation = () =>
{
    return (
        <div className="max-w-7xl max-h-max mx-auto flex flex-col justify-around">
            <Header />           
                <Outlet />
            <Footer/>
        </div>
    );
};

export default Navigation;
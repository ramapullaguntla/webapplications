import '../styles/Navigation.css'
import { Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navigation = () =>
{
    return (
        <div>
        <div className="navigation">
            <div> 
                <Link to="/">Welcome</Link>
            </div>
            <div className="navigation-links">
                <Link to='/shop' >Shop</Link>
                <Link>Contact US</Link>
                <Link>Sign In</Link>
            </div>
           
        </div>
        <Outlet/>
        </div>
    );
}

export default Navigation;
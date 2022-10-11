import '../styles/Navigation.css'
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'

const Navigation = () =>
{
    return (
        <div>
        <div className="navigation">
            <div> 
            <Link to='/' ><CrownLogo /></Link>
            </div>
            <div className="navigation-links">
                <Link to='/shop' >Shop</Link>
                <Link>Contact</Link>
                <Link to='/auth'>SignIn</Link>
            </div>
           
        </div>
        <Outlet/>
        </div>
    );
}

export default Navigation;
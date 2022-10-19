import '../styles/Navigation.css'
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'

import { useContext} from 'react';
import { UserContext } from '../../context/UserContext';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../CartIcon/CartIcon';
import CartDropDown from '../CartDropDown/CartDropDown';
import { CartContext } from '../../context/CartContext';


const Navigation = () =>
{
    const { currentUser } = useContext(UserContext);
    
    const {cartInfo, toggleCart } = useContext(CartContext);

    const logOut = () =>
    {
       signOutUser();
    }

    const toggleState = () =>
    {
        toggleCart();
    }

    return (
        <div>
        <div className="navigation">
            <div> 
            <Link to='/' ><CrownLogo /></Link>
            </div>
            <div className="navigation-links">
                <Link to='/shop' >Shop</Link>                
                <Link to='/auth'>{ currentUser ? <span onClick={logOut}>Sign Out</span> : <span>Sign In</span>}</Link>
                <span onClick={toggleState}><CartIcon /></span>
            </div>
            { cartInfo.isOpen && <CartDropDown /> }
        </div>
        <Outlet/>
        </div>
    );
}

export default Navigation;
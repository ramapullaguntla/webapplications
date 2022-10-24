import '../styles/Navigation.css'
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'


import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../CartIcon/CartIcon';
import CartDropDown from '../CartDropDown/CartDropDown';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';

import { selectCartStatus } from '../../store/Cart/cart.selector';

import { toggleCartOpen } from '../../store/Cart/cart.action';

const Navigation = () =>
{
    const  currentUser  = useSelector(selectCurrentUser);
    
    console.log("Current user is ", currentUser);    

    const isOpen = useSelector(selectCartStatus);

    const dispatch = useDispatch();
    const logOut = () =>
    {
       signOutUser();
    }

    const toggleState = () =>
    {
        var toggleAction = toggleCartOpen();
        dispatch(toggleAction);
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
            { isOpen && <CartDropDown /> }
        </div>
        <Outlet/>
        </div>
    );
}

export default Navigation;
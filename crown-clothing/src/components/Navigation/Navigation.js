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
            <div className='navigation-logo'> 
                <Link to='/' ><CrownLogo /></Link>
                <div><span>Abstract | Help Center</span></div>
            </div>
            
            <div className="navigation-links">
                <Link to='/shop' >Shop</Link>                
                <Link to='/auth'>{ currentUser ? <span onClick={logOut}>Sign Out</span> : <span>Sign In</span>}</Link>
                <span onClick={toggleState}><CartIcon /></span>
            </div>
            { isOpen && <CartDropDown /> }
        </div>
        <div className='help-section'>
            <div className='help-section-content'>
                <div className='header'>How can we help?</div>
                <input type='search' placeholder='Search' />
            </div>
        </div>
        <Outlet/>
        <div className='footer'>           
                 <div>Abstract</div>
                 <div>Resources</div>
                 <div>Community</div>
                 <div>Company</div>
                 <div>&copy; Copyright 2022 Rama Pullaguntla</div>           
        </div>
        </div>
    );
}

export default Navigation;
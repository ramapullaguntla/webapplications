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
        // creating the top Navigation section        
        <div className='relative max-w-7xl mx-auto min-h-screen'>
            {/* Navigation Bar */}
            <div className=" bg-gray-400  px-2 py-4 flex justify-between">
                <div className='flex items-center space-x-4'>
                    <Link to='/' ><CrownLogo /></Link>
                    <div className='text-xl font-bold'>Welcome to Crown Clothing</div>
                </div>
                
                <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-4">
                    <Link to='/shop' >Shop</Link>                
                    <Link to='/auth'>{ currentUser ? <span onClick={logOut}>Sign Out</span> : <span>Sign In</span>}</Link>
                    <span onClick={toggleState}><CartIcon /></span>
                </div>
                { isOpen && <CartDropDown /> }
            </div>
            {/* Help section */}
            <div className='max-w-6xl bg-gray-200 mt-6 mx-auto p-6 text-center'>
                <h3 className='text-4xl font-sans '>How can we help?</h3>
                <input className='w-full rounded-xl p-4 m-2' type='search' placeholder='Search' />
            </div>

            <Outlet/>
            
            {/* Footer */}
            <div className='w-full flex flex-col items-center space-y-4 text-md py-4 font-medium bg-slate-800 text-white md:absolute md:bottom-0 md:flex-row md:space-y-0 md:justify-around'>           
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
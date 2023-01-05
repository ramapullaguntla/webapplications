import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import {ReactComponent as HamburgerIcon} from '../../assets/icon-hamburger.svg'
import {ReactComponent as CloseIcon} from '../../assets/icon-close.svg'


import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../CartIcon/CartIcon';
import CartDropDown from '../CartDropDown/CartDropDown';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';

import { selectCartStatus } from '../../store/Cart/cart.selector';

import { toggleCartOpen } from '../../store/Cart/cart.action';
import { useState } from 'react';

const Navigation = () =>
{
    const [showSignScreen, setShowSignScreen ] = useState(false);

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

    const handleHamIcon = () =>
    {        
        setShowSignScreen(prev =>
            {
                console.log('previous showSign: ', prev);
                return !prev;
            });

       
    }

    console.log('showSign: ', showSignScreen);

    return (
        // creating the top Navigation section        
        <div className='max-w-7xl mx-auto min-h-screen flex flex-col justify-between'>
            {/* Navigation Bar */}
            <div className=" bg-gray-400  px-2 py-4 flex justify-between items-center relative">
                <div className='flex items-center space-x-4'>
                    <Link to='/' ><CrownLogo /></Link>
                    <div className='text-xl font-bold'>Welcome to Crown Clothing</div>
                </div>
                
                <div className='flex items-center space-x-4 md:hidden'>                    
                    <div onClick={toggleState}><CartIcon /></div>
                    <div className='cursor-pointer py-1 w-5 h-5' onClick={handleHamIcon}>
                       { showSignScreen ?  <CloseIcon  /> : <HamburgerIcon />}
                    </div>
                </div>

                <div className="hidden md:flex md:flex-row md:items-center md:space-x-4">
                    <Link to='/shop' >Shop</Link>                
                    <Link to='/auth'>{ currentUser ? <span onClick={logOut}>Sign Out</span> : <span>Sign In</span>}</Link>
                    <span onClick={toggleState}><CartIcon /></span>
                </div>
                <div className='absolute top-14 right-0 md:top-14'>{ isOpen && <CartDropDown /> }</div>
            </div>

            {/* Help section */}
            {!showSignScreen && <div className='bg-gray-200 m-4 rounded-lg p-6 text-center'>
                <h3 className='text-4xl font-sans '>How can we help?</h3>
                <input className='w-full rounded-xl p-4 m-2' type='search' placeholder='Search' />
            </div> }

            {/* Show SignIn, SignOut and cart icon. */}
            {showSignScreen && <div className='bg-gray-400 p-10 flex flex-col space-y-2 items-center text-center text-xl md:hidden'>
                    <Link to='/shop' >Shop</Link>
                    <div className='bg-gray-400 w-28 border'></div>               
                    <Link to='/auth'>{ currentUser ? <span onClick={logOut}>Sign Out</span> : <span>Sign In</span>}</Link>
                </div> }


            <Outlet/>
            
            {/* Footer */}
            <div className='w-full  flex flex-col items-center space-y-4 text-md py-6 font-medium bg-slate-800 text-white  md:flex-row md:space-y-0 md:justify-around'>           
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
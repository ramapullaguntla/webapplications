import React from 'react';
import { useState } from 'react';
import {Link, Route} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {SidebarData} from './SidebarData'
import './SideNavBar.css';
import { IconContext } from 'react-icons/lib';
import { useUserContext } from '../../context/userContext';

const SideNavBar = () =>
{
    const [isOn, setSidebar] = useState(false);

    const showSideBar = () => setSidebar(!isOn);

    const {user, logOut} = useUserContext();
    return( 
        <>
        <IconContext.Provider value= {{color: 'blue'}}>
           <div className="navbar">
               <Link to="#" className="menu-bars">
                   <FaIcons.FaBars onClick={showSideBar}/>
               </Link>
               <h2>React ContextApi</h2>
            <div className="profile">             
            <h3>Welcome, {user.name}</h3>
            {!user.isGuestUser && (<button className="ui button blue" onClick={logOut}>LogOut</button>)}        
            </div>
           </div>
           <nav className={isOn ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSideBar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose onClick={showSideBar}/>
                        </Link>
                    </li>
                    {SidebarData.map((item, index) =>
                    {
                        return(
                            <li key={index} className={item.classname}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
           </nav>
           </IconContext.Provider>
        </>
    );
}

export default SideNavBar;

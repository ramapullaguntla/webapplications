import React from 'react';
import { useState } from 'react';
import {Link, Route, useHistory} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {SidebarData} from './SidebarData'
import './SideNavBar.css';
import { IconContext } from 'react-icons/lib';
import { useUserContext } from '../../context/userContext';
import { useLoginContext } from '../../context/loginUserContext';

const SideNavBar = () =>
{
    const [isOn, setSidebar] = useState(false);

    const showSideBar = () => setSidebar(!isOn);

    const {user, logOut} = useLoginContext();

const history = useHistory();
 const logOutUser = () =>
 {
   console.log("Entered logout ");
    logOut();
    history.push("/");
 };

    return( 
        <>
        <IconContext.Provider value= {{color: 'black'}}>
           <div className="navbar">
               <Link to="#" className="menu-bars">
                   <FaIcons.FaBars onClick={showSideBar}/>
               </Link>
            <h2>Hyland Integration Services</h2>
            <div className="profile">             
            <h3>Welcome, {user.name}</h3>
            {!user.isGuestUser && (<button className="ui button blue" onClick={logOutUser}>LogOut</button>)}        
            </div>
           </div>
           <nav className={isOn ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSideBar}>
                    
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

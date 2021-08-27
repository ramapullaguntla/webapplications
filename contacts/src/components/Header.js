import React from 'react'
import '../styles/Header.css'

class Header extends React.Component
{
    render()
    {
        return (
            <div className= "ui fixed menu">
                <div className="ui container center">
                    <h2>Contact Application</h2>
                </div> 
                <div>
                    <h3>Welcome, User</h3>
                </div>                
            </div>
        );
    }
}

export default Header;
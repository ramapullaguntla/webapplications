import React from 'react';
import { useLoginContext } from '../../context/loginUserContext';
import { useUserContext } from '../../context/userContext';

const Home = () => 
{
    const {user, logOut} = useLoginContext();
    return(
        <div>
            <div>
            {/* <div className="ui message success">
            <h3>You are now Logged in, {user.name}</h3>
            {!user.isGuestUser && (<button className="ui button blue" onClick={logOut}>LogOut</button>)}
            </div> */}
            </div>
        </div>
    );
}

export default Home;
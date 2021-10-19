import React, { createContext, useState } from 'react';
import { useContext } from 'react';

const loginUserContext = createContext(
    {
        user: null,
        logIn: null,
        logOut: null
    }
);

const GUESTUSER = {name: "GUEST", isGuestUser: true};
export const LogInProvider = ({children}) => {

    const [user, setUser] = useState(GUESTUSER);

    const logIn = (usname) =>
    {
        setUser(
            {
                name: usname,
                isGuestUser: false
            }
        );
    };

    const logOut = () =>
    {
        setUser(GUESTUSER);
    };

    return(
    <loginUserContext.Provider value={{user, logIn, logOut}}>
        {children}
    </loginUserContext.Provider>);
}

export function useLoginContext() {
    
    const {user, logIn, logOut} = useContext(loginUserContext);

    return {user, logIn, logOut};
}
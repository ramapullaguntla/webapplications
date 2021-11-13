import React, { createContext, useState } from 'react';
import { useContext } from 'react';
import { loginApi } from '../serverapi/contactsApi';

const loginUserContext = createContext(
    {
        user: null,
        logIn: null,
        logOut: null
    }
);

const GUESTUSER = {name: "GUEST", isGuestUser: true};
export const LogInProvider = ({children}) => {

    const loginUser = async (userdata) =>
        {
            const response = await loginApi.post("/login", userdata);
                    
            return response.data;
        };

    const [user, setUser] = useState(GUESTUSER);

    const logIn = async (usname, pwd) =>
    {       
        var loginResult = await loginUser(
            {
                "username": usname,    
                "password" : pwd
            }
        );

        if(loginResult.message === "success")
        {
            setUser(
                {
                    name: usname,
                    isGuestUser: false
                }
            );
        }
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
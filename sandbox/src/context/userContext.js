import {useState, useContext, createContext, Children} from 'react';

export const userContext = createContext(
  {
    user: null,
    logIn: null,
    logOut: null,
  }
);

const GUEST_USER = {name: "Guest", isGuestUser: true};
export function UserContextProvider({children})
{
   const [user, setUser] = useState(GUEST_USER);

   function logIn(username) {
     setUser({name: username, isGuestUser: false});
   }

   function logOut(params) {
    setUser(GUEST_USER);
   }

    return(
      <userContext.Provider value = {{user, logIn, logOut}}>
        {children}
      </userContext.Provider>
    );
};

export function useUserContext()
{
    const {user, logIn, logOut} = useContext(userContext);

    return {user, logIn, logOut};
}

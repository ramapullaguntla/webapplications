import {createContext, useEffect, useReducer} from 'react';
import { createUserDocument, onAuthStateChangedHandler } from '../utils/firebase/firebase.utils';


export const UserContext = createContext(
    {
        currentUser : null,
        setCurrentUser : () => null

    }
);

export const ACTION_TYPES = { 'SET_CURRENT_USER' : 'SET_CURRENT_USER' };

const userReducer = (state, action) =>
{
    console.log('dispatched');
    console.log("action ", action);
    const { type, payload } = action;

    switch(type)
    {
        case ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state, currentUser: payload
            }
                
            default:
                throw new Error("Unhandled type");
    }
}

const INITIAL_STATE = {
    currentUser: null
}

export const UserProvider = ({children}) =>
{
    //const [currentUser, setCurrentUser] = useState(null);

    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

    const setCurrentUser = (user) =>
    {
        dispatch({type: ACTION_TYPES.SET_CURRENT_USER, payload: user});
    }

    const { currentUser} = state;
    console.log(currentUser);
    
    const value = {currentUser, setCurrentUser};

    useEffect(() => 
    {
        var unsubscribe = onAuthStateChangedHandler( (user) =>
        {      
            if(user)     
            {
                createUserDocument(user);
            }
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);
    
    
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}




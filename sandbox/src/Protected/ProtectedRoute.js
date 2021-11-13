import React from 'react';
import { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useLoginContext } from '../context/loginUserContext';

const ProtectedRoute = ({component: Component, ...rest} ) =>
{
    const {user} = useLoginContext();
    
    return(
        <Route {...rest}  render = { (props) => {

            if(!user.isGuestUser)
            {
                console.log("props are ", props);
                return <Component {...props} {...rest} />
            }
            else
            {
                return <Redirect to={{path:"/", state:{from:props.location}}} />
            }
        }}/>
    );
}

export default ProtectedRoute;
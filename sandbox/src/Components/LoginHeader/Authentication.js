import React from 'react';
import LoginForm from './LoginForm';
import Home from './Home';

class Authentication extends React.Component {
    render() { 
        const user = false;
        return (
            <>{user ? <LoginForm/> : <Home/>}</>
        );
    }
}
 
export default Authentication;
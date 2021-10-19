import React from 'react';
import LoginForm from './LoginForm';
import Home from './Home';
import { useUserContext} from '../../context/userContext';
import { useLoginContext} from '../../context/loginUserContext';

const Authentication = () => {

  const {user} = useLoginContext();
  return(
      <div>
        {user.isGuestUser? <LoginForm/> : <Home />}
      </div>
  );
}

export default Authentication;
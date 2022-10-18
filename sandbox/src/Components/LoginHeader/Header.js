import React from "react";
import { useHistory } from "react-router-dom";
import { useLoginContext } from "../../context/loginUserContext";
import { useUserContext } from "../../context/userContext";

const Header = () => {
 const {user, logOut} = useLoginContext();

 const history = useHistory();
 const logOutUser = (e) =>
 {
   console.log("Entered logout " + e.target.value);
    logOut();
    history.push("/addContact");
 };

  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2>React ContextApi</h2>
        <div className="profile">
          <h3>Welcome, {user.name}</h3>
          {!user.isGuestUser && (
            <button className="ui button blue" onClick={(e) => logOutUser(e)}>Logout</button>
          )}
        </div>
      </div>
    </div>
  );
};


export default Header;
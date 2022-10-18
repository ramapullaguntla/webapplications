import React from 'react';
import {useForm} from "react-hook-form";
import { Link } from 'react-router-dom';
import { useLoginContext } from '../../context/loginUserContext';
import { useUserContext } from '../../context/userContext';
import { useState } from "react";


const LoginForm = () =>
{

   const [errorMessage, setMessage] = useState("");
    const { register, handleSubmit, errors } = useForm();
    const { user, logIn } = useLoginContext();

    const onSubmit = async (data) => {

      try
      {
      await logIn(data.username, data.password);
      console.log("Form data", data);

      if(user.isGuestuser)
      {
        setMessage("Invalid username or password");
      }
    }
    catch
    {
      setMessage("Invalid username or password");
    }
      
    };
    
    console.log(errors);
    return (
        <div className="login">
          <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"              
              ref={register({ required: "Username is required" })}
            />
          </div>
         <p>{errors.username?.message}</p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              ref={register({
                required: "Password is required",
                minLength: {
                  value: 4,
                  message: "Password must be more than 4 characters",
                },
                maxLength: {
                  value: 10,
                  message: "Password cannot exceed more than 10 characters",
                },
              })}
            />
          </div>          
          <p>{errors.password?.message}</p>
          <button className="fluid ui button blue">Submit</button>
          <p style={{ color: 'red'}}>{errorMessage}</p>
          <Link to="/signup" style={{ marginTop: '35px'}}>{"Not registered ? Signup here"}</Link>
        </div>
      </form>
        </div>
    )
};

export default LoginForm;
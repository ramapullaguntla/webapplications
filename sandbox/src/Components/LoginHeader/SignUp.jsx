import React, { useState } from 'react';
import {useForm} from "react-hook-form";
import { Link } from 'react-router-dom';
import { useLoginContext } from '../../context/loginUserContext';
import { useUserContext } from '../../context/userContext';
import { loginApi } from '../../serverapi/contactsApi';


const SignUpForm = () =>
{
  
  const [displayMessage, setMessage] = useState("Already have an account? Login here");
  const addUser = async (userdata) =>
  {
      const response = await loginApi.post("/createuser", userdata);
            
      return response.data;
  };

    const { register, handleSubmit, errors } = useForm();
   
    const onSubmit = async (data) => {
    var addresponse = await addUser(
      { 
        "username" : data.username,
        "email" : data.email,
        "password" : data.password,        
      });
      if(addresponse)
      {
        setMessage("User created successfully. Login here");
        console.log("user added", addresponse);
      }
      
    };
    
    console.log(errors);
    return (
        <div className="login">
          <form onSubmit={handleSubmit(onSubmit)}>
        <h1>SignUp</h1>
        <div className="ui divider"></div>
        <div className="ui form">        
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"              
              ref={register({ required: "Email is required" })}
            />
          </div>
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
          <button className="fluid ui button blue">SignUp</button>          
          <Link to="/" style={{ marginTop: '35px'}}>{displayMessage}</Link>
        </div>
      </form>
        </div>
    )
};

export default SignUpForm;
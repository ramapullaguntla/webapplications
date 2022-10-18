import React, { useState } from 'react';
import {useForm} from "react-hook-form";
import './contacts.css';
import {uuid} from 'uuidv4';
import { useHistory, useLocation } from 'react-router-dom';
import { useLoginContext } from '../../../context/loginUserContext';

const UpdateContact = (props) => {
    
    const { register, handleSubmit, errors } = useForm();

    const location = useLocation();
    const history = useHistory();
    const [userState, setUserState] = useState({name: "", email:""});
    
    const {user} = useLoginContext();       
    
    
    const onUpdate = (data) =>
    {
        console.log('Contact Name is ' + data.contactName);
        console.log('Contact Email is ' + data.contactEmail);

        var uniqueid = uuid();
        props.editContact({"id": location.state.ct.id, "name": data.contactName, "email": data.contactEmail});
        history.push("/contacts");
    };

    if(user.isGuestUser)
    {
        return <></>;
    }

    return(
        <div className="contactScreen">
        <form onSubmit={handleSubmit(onUpdate)}>                
            <h1>Update Contact</h1>
            <div className="divider"></div>
            <div className="ct form">
                <div className="eachfield">
                    <label>Name</label>
                    <input
                        type="text"
                        name="contactName"
                        placeholder="Name"  
                        defaultValue={location.state?.ct.name}  onChange={(e) => setUserState({name: e.target.value})}    
                        ref={register({ required: "Username is required" })}
                        />
                </div>
                <p>{errors.contactName?.message}</p>
                <div className="eachfield">
                    <label>Email</label>
                    <input type='text' name="contactEmail" placeholder="Email" onChange={(e) => setUserState({email: e.target.value})}    
                    defaultValue={location.state?.ct.email} 
                    ref={register({required: "Email is required"})}/>
                </div>
                <p>{errors.contactEmail?.message}</p>
                <button className="addbutton">Update Contact</button>
            </div>               
        </form>
        </div>       
    );
}

export default UpdateContact;
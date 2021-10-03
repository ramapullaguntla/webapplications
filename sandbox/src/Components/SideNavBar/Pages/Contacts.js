import React from 'react';
import { FaRegistered } from 'react-icons/fa';
import ContactCard from './ContactCard';
import {useForm} from "react-hook-form";

const Contacts = (props) => {
    
    console.log(props.contactdata);
    const { register, handleSubmit, errors } = useForm();

    const renderContacts =  props.contactdata.map((eachContact) =>
    {
     return <ContactCard Contact = {eachContact}/>
    });

    function rendereach()
    {
        return(
            props.contactdata.map((eachContact) => 
            {
                return <ContactCard Contact = {eachContact}/>
            })
        );
    }

    return(
        <div>      
            <form>
                <div >
                    <h1>Add Contact</h1>
                    <div className="ui form">
                        <div className="field">
                            <label>Name</label>
                            <input type='text' name="contactName" placeholder="Name"
                            ref={register({required: "Name is required"})}/>
                        </div>
                        <p>{errors.contactName?.message}</p>
                        <div className="field">
                            <label>Email</label>
                            <input type='text' name="contactEmail" placeholder="Email"
                            ref={register({required: "Email is required"})}/>
                        </div>
                        <p>{errors.contactName?.message}</p>
                        <button className="ui button blue">Add Contact</button>
                    </div>
                </div>
                </form>         
            {rendereach()}
        </div>
    );
    
}




export default Contacts;
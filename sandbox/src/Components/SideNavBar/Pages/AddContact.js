import React from 'react';
import {useForm} from "react-hook-form";
import './contacts.css';
import {uuid} from 'uuidv4';

const AddNewContact = (props) => {
    
    const { register, handleSubmit, errors } = useForm();

    const onAdd = (data) =>
    {
        console.log('Contact Name is ' + data.contactName);
        console.log('Contact Email is ' + data.contactEmail);

        var uniqueid = uuid();
        props.addcontact({"id": uniqueid, "name": data.contactName, "email": data.contactEmail});

    };

    return(
        <div className="contactScreen">
        <form onSubmit={handleSubmit(onAdd)}>                
            <h1>Add Contact</h1>
            <div className="divider"></div>
            <div className="ct form">
                <div className="eachfield">
                    <label>Name</label>
                    <input
                        type="text"
                        name="contactName"
                        placeholder="Name"              
                        ref={register({ required: "Username is required" })}
                        />
                </div>
                <p>{errors.contactName?.message}</p>
                <div className="eachfield">
                    <label>Email</label>
                    <input type='text' name="contactEmail" placeholder="Email"
                    ref={register({required: "Email is required"})}/>
                </div>
                <p>{errors.contactEmail?.message}</p>
                <button className="addbutton">Add Contact</button>
            </div>               
        </form>
        </div>       
    );
}

export default AddNewContact;
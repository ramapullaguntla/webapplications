import React from 'react';
import {useForm} from "react-hook-form";
function AddNewContact(params) {
    
    const { register, handleSubmit, errors } = useForm();

    const onAdd = (data) =>
    {
        console.log('Contact Name is ' + data.contactName);
        console.log('Contact Email is ' + data.contactEmail);
    };

    return(
        <form onSubmit={handleSubmit(onAdd)}>
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
    );
}

export default AddNewContact;
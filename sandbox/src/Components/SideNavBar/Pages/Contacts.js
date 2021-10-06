import React from 'react';
import { FaRegistered } from 'react-icons/fa';
import AddNewContact from './AddContact';
import ContactCard from './ContactCard';


const Contacts = (props) => {
    
    console.log(props.contactdata);
    

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
            <AddNewContact/>                
            {rendereach()}
        </div>
    );
    
}




export default Contacts;
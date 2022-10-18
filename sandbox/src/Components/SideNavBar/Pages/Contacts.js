import React, { Fragment } from 'react';
import { FaRegistered } from 'react-icons/fa';
import AddNewContact from './AddContact';
import ContactCard from './ContactCard';


const Contacts = (props) => {
    
    console.log("The contacts passed are " + props.contactdata[0]);
        
    const rendereach = () =>
    {
        return(
            props.contactdata.map((eachContact) => 
            {
                console.log("each contact ", eachContact);
                return(
                 <Fragment key={eachContact.id}>
                 <ContactCard Contact = {eachContact} 
                    deletecontact={deleteContactHandler} 
                    key={eachContact.id}/>
                 <div className="divider"></div>
                 </Fragment>
                );
            })
        );
    };
    
    const addContactHandler = (ct) =>
    {
        props.addMainContact(ct);
    }

    const deleteContactHandler = (id) =>
    {
        props.deleteMainContact(id);
    }

    return(        
        <div>
            <div style={{margin:'100px', padding:'70px'}}>
            <AddNewContact addcontact={addContactHandler}/> 
            </div>    
            <div>
                <h2 style={{textAlign:'center', margin:'25px'}}>Contact List</h2>
            </div>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', margin:'25px'}}>
             {props.contactdata.length > 0 ? rendereach() : <h2>No contacts are found to display</h2>}
             </div>
        </div>
    );
    
}




export default Contacts;
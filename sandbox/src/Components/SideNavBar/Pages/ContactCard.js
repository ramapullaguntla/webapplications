import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

const ContactCard = (props) =>
{
    console.log('contact: ' + props.Contact.name)
    return(
        <div className="contact">
            <div>
             <FaIcons.FaIdBadge/>
             </div>
             <div style={{margin:'10px'}}>{props.Contact.name}</div>                   
             <div style={{margin:'10px'}}>{props.Contact.email}</div>
             <div><FaIcons.FaTrashAlt/></div>
        </div>
    );
}

export default ContactCard;
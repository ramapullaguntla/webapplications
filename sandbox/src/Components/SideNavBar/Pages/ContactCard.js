import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';

const ContactCard = (props) =>
{
    console.log('contact: ' + props.Contact.name)
    return(
        <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', width:'50%', backgroundColor:'#fff'}}>
            <div>
             <FaIcons.FaIdBadge/>
             </div>
             <div style={{margin:'10px'}}>{props.Contact.name}</div>                   
             <div style={{margin:'10px'}}>{props.Contact.email}</div>
             <div>
                 <Link to={{pathname: "/updateContact", state:{ ct: props.Contact}}}><FaIcons.FaEdit/></Link></div>
             <div><FaIcons.FaTrashAlt onClick={() => { props.deletecontact(props.Contact.id)}}/></div>
             
        </div>
    );
}

export default ContactCard;
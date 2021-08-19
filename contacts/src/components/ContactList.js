import React from 'react'
import ContactCard from './ContactCard';


// class ContactList extends React.Component
// {      
//     render()
//     {        
//         return(
//             <div className="ui celled list">{this.renderList}</div>
//         );
//     }

//     deleteHandler = (id) =>
//     {
//         this.props.getContactId(id);
//     }

//     renderList = this.props.contacts.map((contact) =>
//     {
//         console.log("inside renderlist: " + JSON.stringify(this.props));
//         return(
//              <ContactCard contactdetail = {contact} clickHandler={this.deleteHandler} key={contact.id}></ContactCard>
//             );
//     });
    
// }

const ContactList = (props) => {
    console.log(props);
  
    const deleteContactHandler = (id) => {
      props.getContactId(id);
    };
    const renderContactList = props.contacts.map((contact) => {
      return (
        <ContactCard
          contactdetail={contact}
          clickHandler={deleteContactHandler}
          key={contact.id}
        />
      );
    });
    return <div className="ui celled list">{renderContactList}</div>;
  };

export default ContactList;
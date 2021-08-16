import React from 'react'


class ContactList extends React.Component
{   
    constructor(props)
    {
        super(props);
    }
    render()
    {
        console.log(this.props);
        return(
            <div className="ui celled list">{this.renderList}</div>
        );
    }

    renderList = this.props.contacts.map((contact) =>
    {
        return(
            <div>
                <div>{contact.name}</div>
                <div>{contact.email}</div>
            </div>
            );
    });
    
}

export default ContactList;
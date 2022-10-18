import React from 'react';
import logo from '../logo.svg'

class ContactCard extends React.Component {
    
    state = {  }
    render() { 
        return(
            <div className="item">       
                <img className="ui avatar image" src={logo} />
                <div className="content">
                    <div className="header">{this.props.contactdetail.name}</div>
                    <div>{this.props.contactdetail.email}</div>
                </div>
                <i className="trash alternate outine icon" style={{color:"red", marginTop:"7px"}} onClick={() => this.props.clickHandler(this.props.contactdetail.id)} />
            </div>
            );
    }
}


 
export default ContactCard;
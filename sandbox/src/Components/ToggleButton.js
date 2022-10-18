import React from 'react';

class ToggleButton extends React.Component {
    
    state = {
      isTurnedOn: false,      
    };

    handleClick = () =>
    {
        this.setState( prevState => {
            
            return {
                isTurnedOn: !prevState.isTurnedOn
            };
        }
        );
    }

    handleClickDirect()
    {
        this.setState( prevState => {
            
            return {
                isTurnedOn: !prevState.isTurnedOn
            };
        }
        );
    }
    
    render() 
    { 
        return( 
        <div>
            <h1>Toggle button demo</h1>
            <button className="btn primary" onClick={() => this.handleClickDirect()}>{this.state.isTurnedOn? "ON" : "OFF"}</button>
            <button className="btn primary" onClick={this.handleClick}>{this.state.isTurnedOn? "ON" : "OFF"}</button>
        </div>
        );
    }
}
 
export default ToggleButton;
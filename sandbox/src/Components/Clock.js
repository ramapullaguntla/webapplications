import React from 'react';

class Clock extends React.Component
{
    state={
        date: new Date()
    };

    constructor(props)
    {
        super(props);
        
    }
    render()
    {
        return(
            <h1>Today is {this.state.date.toLocaleTimeString()}</h1>
        );
    }

    

    componentDidMount()
    {
        this.timerID = setInterval(
            () =>
            {
                this.tick();
            }, 1000
        );
    }

    tick()
    {
        this.setState({date: new Date()});
    }

    componentWillUnmount()
    {
        clearInterval(this.timerID);
    }
    
}

export default Clock;
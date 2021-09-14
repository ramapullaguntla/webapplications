import React from 'react'
import '../styles/NavigationFlexbox.css'

class NavigationFlexBox extends React.Component
{
    render()
    {
        return(
            <div className="flexheader">
                <div className="box box1">Item1</div>
                <div className="box box2">Item1</div>
                <div className="box box3">Item3</div>
                <a href="http://onbase.com" className="links">A1</a>
                <a href="http://www.google.com" className="links">A2</a>
                <a href="http://www.test.com" className="links">A3</a>
            </div>
        );
    }
}

export default NavigationFlexBox;
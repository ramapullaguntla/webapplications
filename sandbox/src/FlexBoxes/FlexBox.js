import React from 'react';
import './Flexbox.css' 

class FlexBox extends React.Component
{
    render()
    {
        return(
            <div className="flexcontainer">
                <div className="box box1">1</div>
                <div className="box box2">2</div>
                <div className="box box3">3</div>
                <div className="box box4">4</div>
                <div className="box box5">5</div>
                <div className="box box6">6</div>
                <div className="box box7">7</div>
                <div className="box box8">8</div>
                <div className="box box9">9</div>
                <div className="box box10">10</div>
            </div>
        );
    }
}

export default FlexBox;
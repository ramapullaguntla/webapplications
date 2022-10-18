import React from 'react';
import './Game.css';

const Square = (props) =>
{
    return(
        <div>
            <button onClick={ () => props.clicked(props.index)}>{props.displayvalue}</button>
        </div>
    );
}

export default Square;
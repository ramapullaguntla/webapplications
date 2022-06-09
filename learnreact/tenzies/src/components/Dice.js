import React, { useEffect, useState } from 'react';

function Dice(props)
{        

    function hold()
    {       
        props.onHold(props.id);
    }

    return (
        <div>
            <button id={props.id} onClick={hold}
             style={{width:"40px", height: "40px", margin: "10px", padding: "10px", color: `${props.held ? "red" : "black"}`}}>
             {props.value}
            </button>
        </div>
    );
}

export default Dice;
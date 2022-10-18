import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import Dice from './Dice';

//This component does not hold the overall state. It lets the Dice component hold the state for isHeld
// This is not the way to do it.

function Board()
{
    const [numbers, setNumbers] = useState([]);

    useEffect(() =>
    {
       setRandomArray();
        
    }, []);

    function setRandomArray()
    {
        var array = [];
        for(let i = 0; i < 10; i++)
        {
            var random = Math.floor(Math.random() * 6);
            array.push(random);
        }

        setNumbers(array);
    }

    function renderDices()
    {
       return numbers.map((each,index) => <Dice value={each} key={index}/>);
    }

    return (
        <div className="mainboard">
            <h1>Tenzies</h1>
            <div className="dices">
                 {renderDices()}
            </div>
            <button onClick={setRandomArray}>Roll Dice</button>
        </div>
    );
}

export default Board;
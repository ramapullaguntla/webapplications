import React, { useEffect, useState } from 'react';
import Dice from './Dice';

function BoardGame()
{
    //each dice - id, isHeld, value
    const [allDices, setDices] = useState(loadDices());

    const [isGameOver, setGameOver] = useState(false);

    function loadDices()
    {
            var dices = [];
            for(let i =0; i < 10; i++)
            {
                dices.push(
                    {
                        id: i+1,
                        value: Math.floor(Math.random() * 6),
                        isHeld: false
                    }
                )
            }
            return dices;
    }

    useEffect(() =>
        {
            console.log("effect rendered");
            var firstvalue = allDices[0].value;

            
            var itemfound = allDices.find(dc => dc.value !== firstvalue);
            if(!itemfound)
            {                
                setGameOver(true);
            }
            
        },
        [allDices]
    );

    function rollDice()
    {
        if(isGameOver)
        {
            setDices(prev =>
                {
                    return prev.map(each => 
                        {
    
                            return {...each, isHeld: false, value: Math.floor(Math.random() * 6)};
                        });                   
                });
            
                setGameOver(false);
        }
        else
        {
        setDices(prev =>
            {
                return prev.map(each => 
                    {

                        return each.isHeld ?
                        each :
                        {...each, value: Math.floor(Math.random() * 6)}
                    });                   
            });     
        }      
    }

    function holdDice(id)
    {        
        setDices(prev =>  prev.map(each =>            
            {
                return each.id === id ?
                {...each, isHeld: true} :
                each
            }));                       
    }

    return (
        <div className="mainboard">
            <h1>Tenzies Game</h1>
            <div className="dices">               
            { allDices.map((each) => <Dice key={each.id} id={each.id} value={each.value} held={each.isHeld} onHold={holdDice}/>)}
            </div>
            <button onClick={rollDice}>{isGameOver ? "Reset Game" : "Roll Dice"}</button>
        </div>
    );
}

export default BoardGame;
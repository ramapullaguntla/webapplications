import React from 'react';
import Temperature from './Temperature';
import { useState } from 'react';

const CalculateTemperature = () =>
{
    const [boilString, setBoilString] = useState("Water does not boil at this temperature");    

    const changeBoilStatus = (status) =>{
        
        setBoilString(status);
    }

    return(
        <div>            
            <Temperature scale="celsius" updateBoil={changeBoilStatus} />
            <textarea value={boilString}></textarea>

            <Temperature scale="fahreinheit" updateBoil={changeBoilStatus}/>
            <textarea value={boilString}></textarea>
               
        </div>
    );
};

export default CalculateTemperature;
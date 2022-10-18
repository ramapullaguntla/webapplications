import React from 'react'

class Temperature extends React.Component
{
    
    handleChange = (e) =>
    {
        console.log('Entered number ' + e.target.value)
        const tempr = parseFloat(e.target.value);
        if(Number.isNaN(tempr))
        {
            return;
        }


        var convertedvalue = tempr;
        if(this.props.scale === "celsius")
        {
            convertedvalue = this.convertToFahreinHeit(tempr);
        }
        if(convertedvalue > 100) 
        {
            console.log('Entered number is more');

            this.props.updateBoil("Water now Boils");
        }
        else
        {
            console.log('Entered number is less');

            this.props.updateBoil("Water does not Boil at this temperature");
        }


    };

    convertToFahreinHeit(fl)
    {
        return (fl * 9/5) + 32;
    }
    
    render()
    {
        return(
            <div style={{display: 'flex'}}>                             
                <input type="text" onChange={this.handleChange}></input>
                <textarea value={this.props.scale}></textarea>
            </div>
        );
    }
        
}

export default Temperature;

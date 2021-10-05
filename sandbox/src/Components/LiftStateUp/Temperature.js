import React from 'react'

class Temperature extends React.Component
{
    state = {
        boils: false,
        boilString: "Water does not boil at this temperature"
    };
    
    handleChange = (e) =>
    {
        console.log('Entered number ' + e.target.value)
        const tempr = parseFloat(e.target.value);
        if(Number.isNaN(tempr))
        {
            return;
        }

        var convertedvalue = this.convertToFahreinHeit(tempr);
        if(convertedvalue > 99) 
        {
            console.log('Entered number is more');

            this.setState({
                boils: true,
                boilString: "Water boils at this temperature"
            });
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
                <textarea value={this.state.boilString}></textarea>
                <input type="text" onChange={this.handleChange}></input>
            </div>
        );
    }
        
}

export default Temperature;

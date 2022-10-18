import React, { Component } from 'react';

class ClassComponentExample extends Component 
{
    
    
    constructor()
    {
        super();

        this.filterResults = this.filterResults.bind(this);
    }
    state = { 
        monsters : [
            {
                name : "Rama"
            },
            {
                name : "John"
            },
            {
                name : "Mark"
            },
        ],

        filteredMonsters : []
     }

    componentDidMount()
    {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(response => this.setState({
            monsters: response,
            filteredMonsters: response,
        }))
    }

    filterResults(ev)
    {
       var allMonsters = this.state.monsters;
       var search = ev.target.value.toLowerCase();
        this.setState(
            {
                filteredMonsters : allMonsters.filter(mn => mn.name.toLowerCase().includes(search))
            })
                    
    }

    render() { 
        return (
          
            <div>
                <input type="search" placeholder='search here' onChange={this.filterResults}/>
                {this.state.filteredMonsters.map(mn => 
                <h3>{mn.name}</h3>)}</div>
                
            
        );
    }
}
 
export default ClassComponentExample;

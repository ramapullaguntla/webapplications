import './App.css';
import {useEffect, useState} from 'react';
import SearchBar from './Components/SearchBar/SearchBar';
import CardList from './Components/CardList/CardList';


function App() {

  const [searchText, setSearchText] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  console.log("App rendered");
  useEffect(() =>
  {
     console.log("effect rendered");
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(res => setMonsters(res))
      

  }, []);

  useEffect(() =>
  {
    if(searchText)
    {
       setFilteredMonsters(monsters.filter(mn => mn.name.toLowerCase().includes(searchText.toLowerCase())));
    }
    else
    {
      setFilteredMonsters(monsters);
    } 

  }, [searchText, monsters]);

  const onSearch = (e) =>
  {
      var val = e.target.value;
      setSearchText(val);
  };

  return (
    
    <div className="App">
      <header className="App-header">        
         <div className='monsters-app'>
            <SearchBar name='searchBar' placeholder='Search Monsters' onSearch={onSearch}/>
            <CardList monsters={filteredMonsters}/>
         </div>
      </header>
    </div>
  );
}

export default App;

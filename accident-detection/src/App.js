import React from 'react';
import './App.css';
import CarDamageDetector from './Components/CarDamageDetector';
import {Routes, Route} from 'react-router-dom';
import CarDamageAnalyzer from './Components/CarDamageAnalyzer';
import Navigation from './Components/Navigation';


function App() {
  
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <CarDamageDetector/>
  //     </header>
  //   </div>
  // );

  return (    
    <Routes>
          <Route path="/" element={ <Navigation />}>              
              <Route index element= { <CarDamageDetector /> } />     
              <Route path="/analyze" element= { <CarDamageAnalyzer /> } />                          
            </Route>
    </Routes>   
  );
}

export default App;

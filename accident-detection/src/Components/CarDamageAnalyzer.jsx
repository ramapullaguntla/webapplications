import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {accidentInfo} from '../accidentInfo'

const CarDamageAnalyzer = () => {
  
  const location = useLocation();

  var acInfo = accidentInfo.find(ac => ac.title === location.state.filename);

  
  

  return (
    <div>
      <h2>Accident Analysis</h2>      
      <div className='max-w-[400px]'>
          <img src={require('../assets/analyzedphotos/' + location.state.filename)} alt="Car" /> 
      </div>
      <div>
          <h3>Damages</h3>
          <div>
              {acInfo.damages}
          </div>
          <div>Estimate : {acInfo.estimate} Dollars USD</div>
      </div>
    </div>
  );
};

export default CarDamageAnalyzer;

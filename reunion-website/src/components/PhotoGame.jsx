import React, { useState, useEffect } from 'react';
import { gameInfo } from '../photogame';
import { useNavigate } from 'react-router-dom';

const PhotoGame = () => {
  const [photoUrl, setPhotoUrl] = useState('');
  const [options, setOptions] = useState([]);
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [counter, setCounter] = useState(0);

  const [trackerArray, setTracker] = useState([]);
  const navigate = useNavigate();

  const [gameover, setGameOver] = useState(false);

  const [answerHistory, setAnswerHistory] = useState([]);
  

  useEffect(() => {
    fetchGame();
  }, []);

  const fetchGame = () => {
    try {
           
      var randomNum = Math.floor(Math.random() * 25);
       
      while(trackerArray.length > 0 && trackerArray.find(v => v === randomNum))
      {
         randomNum = Math.floor(Math.random() * 25);
      }

      setTracker([...trackerArray, randomNum]);
      
      const data = gameInfo[randomNum];
           
      const imagelocation = require('../assets/childhoodphotos/' + data.imageUrl);
            
      setPhotoUrl(imagelocation);
      setOptions(data.options);
      setAnswer(data.answer);    
      
    } catch (error) {
      console.error('Error fetching game:', error);
    }
  };

  const checkAnswer = (selectedOption) => {

     var answerInfo = {
        "answer" : answer,
        "isCorrect": false
     };

    if (selectedOption === answer)
     {      
        answerInfo.isCorrect = true;
        setScore(prev => prev + 1);      
     }

     setAnswerHistory([...answerHistory, answerInfo]);
    // Fetch a new game after answering
    fetchGame();

    
    if(counter === 9)
    {      
       setGameOver(true);
    }
    setCounter(counter + 1);
  };

  const handleGameOver = () =>
  {
    navigate('/gameover',{state:{finalscore: score, answerInfo: answerHistory }});
  }

  return (
    gameover ? <div>{handleGameOver()}</div> : <div className='flex flex-col items-center space-y-5'>
      <h2 className='text-xl font-medium'>Who is this?</h2>
      <img className='max-w-56 max-h-56' src={photoUrl} alt="Person" />             
      <div className='flex space-x-3 justify-between'>
        {options.map((option, index) => (
          <button className='bg-cyan-500 px-3 py-1 rounded-lg' key={index} onClick={() => checkAnswer(option)}>{option}</button>
        ))}
      </div>
      <p className='text-2xl font-bold'>Score: {score}</p>
    </div>
  );
};

export default PhotoGame;

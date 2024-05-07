import React, { useState, useEffect } from 'react';
import { gameInfo } from '../photogame';
import { useNavigate } from 'react-router-dom';

const info = [
    {
      "id": 1,
      "options": ["bhavani", "sudha", "hyndavi", "radhika"],
      "imageUrl": "../assets/childhoodphotos/bhavani.png",
      "answer" : "bhavani"
    },
    {
      "id": 2,
      "options": ["bhavani", "swathi", "saritha", "radhika"],
      "imageUrl": "../assets/childhoodphotos/radhika.png",
      "answer" : "radhika"
    },
    {
      "id": 3,
      "options": ["neelima", "sharmila", "hyndavi", "vineela"],
      "imageUrl": "../assets/childhoodphotos/neelima.png",
      "answer" : "neelima"
    },
    {
      "id": 4,
      "options": ["vamshi", "saikiran", "ravi kiran", "laxmikanth"],
      "imageUrl": "../assets/childhoodphotos/saikiran.png",
      "answer" : "saikiran"
    },
    {
      "id": 5,
      "options": ["rama", "sai kiran", "soma sundar", "chandra"],
      "imageUrl": "../assets/childhoodphotos/chandra.png",      
      "answer" : "chandra"
    }
  ];

const PhotoGame = () => {
  const [photoUrl, setPhotoUrl] = useState('');
  const [options, setOptions] = useState([]);
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [counter, setCounter] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    fetchGame();
  }, []);

  const fetchGame = () => {
    try {
     
      var randomNum = Math.floor(Math.random() * 26);

      // while(tracker.find(n => n === randomNum) !== undefined)
      // {
      //     randomNum = Math.floor(Math.random() * 26); 
      // }

      // setTracker([...tracker, randomNum]);
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
    if (selectedOption === answer) {
      // Increment score if the selected option is correct
      setScore(score + 1);
    }
    // Fetch a new game after answering
    fetchGame();

    
    if(counter === 9)
    {
       // alert(`Game Over! Your score: ${score}`);
       navigate('/gameover',{state:{finalscore: score}});
        setScore(0);
        setCounter(0);
    }
    setCounter(counter + 1);
  };

  return (
    <div className='flex flex-col items-center space-y-5'>
      <h2 className='text-xl font-medium'>Who is this?</h2>
      <img className='w-50 h-50' src={photoUrl} alt="Person" />             
      <div className='flex space-x-3 justify-between'>
        {options.map((option, index) => (
          <button className='bg-blue-500 text-white px-3 py-1 rounded-lg' key={index} onClick={() => checkAnswer(option)}>{option}</button>
        ))}
      </div>
      <p className='text-2xl font-bold'>Score: {score}</p>
    </div>
  );
};

export default PhotoGame;

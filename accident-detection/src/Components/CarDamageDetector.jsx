import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CarDamageDetector = () => {
  const [file, setFile] = useState(null);
  const [analyzedfile, setAnalyzedFile] = useState(null);

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setAnalyzedFile(null);
  };

  const showAnalyzedImage = () =>
  {
        if(file)
        {           
            navigate('/analyze',{state:{filename: file.name }});            
        }
  }

  return (
    <div>      
      <input type="file" onChange={handleFileChange}  />
      {file && (
        <div> 
            {console.log("file details: ", file)}         
          <img src={URL.createObjectURL(file)} alt="Car" style={{ maxWidth: '400px', width: '100%' }} />
          <button onClick={() => showAnalyzedImage()}>Analyze</button>          
        </div>
      )}
    </div>
  );
};

export default CarDamageDetector;

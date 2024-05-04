import HeroSection from "./components/HeroSection";
import PhotoGallery from "./components/PhotoGallery";
import {Routes, Route} from 'react-router-dom';
import Navigation from "./components/Navigation";
import { useEffect, useState } from "react";

function App() {

   const [imageArray, setImages] = useState([]);
  useEffect(() =>
  {
    const importAll = (r) => {
      let images = {};
      r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
      return images;
    }

    const images = importAll(require.context('./assets', false, /\.(png|jpe?g|svg)$/)); 

    const arrayImages = [];
    Object.keys(images).map((image, index) =>  arrayImages.push(images[image])); 
          
    console.log("image array ", arrayImages);
    setImages(arrayImages);
  },[]);

  return (    
    <Routes>
          <Route path="/" element={ <Navigation />}>
              <Route index element= { <HeroSection/> }></Route>
              <Route path="/photos" element= { <PhotoGallery photos={imageArray} /> } />                
            </Route>
    </Routes>   
  );
}

export default App;

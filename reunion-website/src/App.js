import HeroSection from "./components/HeroSection";
import PhotoGallery from "./components/PhotoGallery";
import {Routes, Route} from 'react-router-dom';
import Navigation from "./components/Navigation";
import { useEffect, useState } from "react";
import Blog from "./components/Blog";
import BlogForm from "./forms/BlogForm";
import PhotoGame from "./components/PhotoGame";

function App() {

   const [imageArray, setImages] = useState([]);
  useEffect(() =>
  {
    const importAll = (r) => {
      let images = {};
      r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
      return images;
    }

    const images = importAll(require.context('./assets/photos', false, /\.(png|jpe?g|svg)$/)); 

    const arrayImages = [];
    Object.keys(images).map((image, index) =>  arrayImages.push(images[image])); 
          
    console.log("image array ", arrayImages);
    setImages(arrayImages);
  },[]);

  return (    
    <Routes>
          <Route path="/" element={ <Navigation />}>
              <Route index element= { <HeroSection/> }></Route>
              <Route path="/blogs" element= { <Blog /> } />  
              <Route path="/addblog" element= { <BlogForm /> } />    
              <Route path="/photos" element= { <PhotoGallery photos={imageArray} /> } />   
              <Route path="/playgame" element= { <PhotoGame /> } />                
            </Route>
    </Routes>   
  );
}

export default App;

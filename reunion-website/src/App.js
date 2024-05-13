import HeroSection from "./components/HeroSection";
import PhotoGallery from "./components/PhotoGallery";
import {Routes, Route} from 'react-router-dom';
import Navigation from "./components/Navigation";
import { useEffect, useState } from "react";
import Blog from "./components/Blog";
import BlogForm from "./forms/BlogForm";
import PhotoGame from "./components/PhotoGame";
import GameIntro from "./components/GameIntro";
import GameOver from "./components/GameOver";
import VideoGallery from "./components/VideoGallery";

function App() {

  const [imageArray, setImages] = useState([]);
  const [videoArray, setVideos] = useState([]);
  useEffect(() =>
  {
    const importAll = (r) => {
      let images = {};
      r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
      return images;
    }

    const images = importAll(require.context('./assets/photos', false, /\.(png|jpe?g|svg)$/)); 

    const videos = importAll(require.context('./assets/videos', false, /\.(mp4|MOV)$/)); 

    const arrayImages = [];
    Object.keys(images).map((image, index) =>  arrayImages.push(images[image]));  
    setImages(arrayImages);
    
    const arrayVideos = [];
    Object.keys(videos).map((vdo, index) =>  arrayVideos.push(videos[vdo]));  
    setVideos(arrayVideos);
  },[]);

  return (    
    <Routes>
          <Route path="/" element={ <Navigation />}>
              <Route index element= { <HeroSection/> }></Route>
              <Route path="/blogs" element= { <Blog /> } />  
              <Route path="/addblog" element= { <BlogForm /> } />    
              <Route path="/photos" element= { <PhotoGallery photos={imageArray} /> } />   
              <Route path="/gameintro" element= { <GameIntro /> } />
              <Route path="/playgame" element= { <PhotoGame /> } />     
              <Route path="/gameover" element= { <GameOver /> } />    
              <Route path="/videos" element= { <VideoGallery videos={videoArray} /> } />            
            </Route>
    </Routes>   
  );
}

export default App;

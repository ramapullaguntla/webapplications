import HeroSection from "./components/HeroSection";
import PhotoGallery from "./components/PhotoGallery";
import {Routes, Route} from 'react-router-dom';
import Navigation from "./components/Navigation";
import { useEffect, useState } from "react";
import PhotoGame from "./components/PhotoGame";
import GameIntro from "./components/GameIntro";
import GameOver from "./components/GameOver";
import VideoGallery from "./components/VideoGallery";
import OlmPhotoGallery from "./components/OlmPhotoGallery";
import EventCalendar from "./components/EventCalendar";
import Volunteer from "./components/Volunteer";
import ScheduleEditor from "./components/ScheduleEditor";

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

    console.log("videos are ", videos);
    Object.keys(videos).map((vdo, index) =>  arrayVideos.push(videos[vdo]));  
    setVideos(arrayVideos);
  },[]);

  return (    
    <Routes>
          <Route path="/" element={ <Navigation />}>
              <Route index element= { <HeroSection/> }></Route>                            
              <Route path="/events" element= { <EventCalendar /> } />  
              <Route path="/volunteer" element= { <Volunteer /> } /> 
              <Route path="/photos" element= { <OlmPhotoGallery photos={imageArray} /> } />   
              <Route path="/gameintro" element= { <GameIntro /> } />
              <Route path="/playgame" element= { <PhotoGame /> } />     
              <Route path="/gameover" element= { <GameOver /> } />
              <Route path="/secreteditor" element= { <ScheduleEditor /> } />               
            </Route>
    </Routes>   
  );
}

export default App;

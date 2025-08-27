import HeroSection from "./components/HeroSection";
import PhotoGallery from "./components/PhotoGallery";
import {Routes, Route} from 'react-router-dom';
import Navigation from "./components/Navigation";
import { useEffect, useState } from "react";
import PhotoGame from "./components/PhotoGame";
import GameIntro from "./components/GameIntro";
import GameOver from "./components/GameOver";
import EventCalendar from "./components/EventCalendar";
import Volunteer from "./components/Volunteer";
import ScheduleEditor from "./components/ScheduleEditor";

function App() {

  const [imageArray, setImages] = useState([]);
  const [clayGaneshaimageArray, setClayGaneshaImages] = useState([]);

  const [ttImageArray, setTTImages] = useState([]);
  const [cricketImageArray, setCricketImages] = useState([]);

  const [pickleBallImageArray, setPickleBallImages] = useState([]);
  const [badmintonImageArray, setBadmintonImages] = useState([]);
  
  useEffect(() =>
  {
    const importAll = (r) => {
      let images = {};
      r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
      return images;
    }

    const images = importAll(require.context('./assets/festival', false, /\.(png|jpg|jpe?g|svg)$/)); 
    
    const arrayImages = [];
    Object.keys(images).map((image, index) =>  arrayImages.push(images[image]));  
    setImages(arrayImages);    

    //clay ganesha photos
    const clayGaneshaImages = importAll(require.context('./assets/clayganeshaworkshop', false, /\.(png|jpg|jpe?g|svg)$/)); 
   
    const arrayclayGaneshaImages = [];
    Object.keys(clayGaneshaImages).map((clImage, index) =>  arrayclayGaneshaImages.push(clayGaneshaImages[clImage]));  
    setClayGaneshaImages(arrayclayGaneshaImages);    

    //tt photos
    const ttImages = importAll(require.context('./assets/sportingevents/tabletennis', false, /\.(png|jpg|jpe?g|svg)$/)); 
    
    const arrayttImages = [];
    Object.keys(ttImages).map((tti, index) =>  arrayttImages.push(ttImages[tti]));  
    setTTImages(arrayttImages);

    //cricket photos
    const cricketImages = importAll(require.context('./assets/sportingevents/cricket', false, /\.(png|jpg|jpe?g|svg)$/)); 
    
    const arraycricketImages = [];
    Object.keys(cricketImages).map((ci, index) =>  arraycricketImages.push(cricketImages[ci]));  
    setCricketImages(arraycricketImages);

    //pickleball photos
    const pickleballImages = importAll(require.context('./assets/sportingevents/pickleball', false, /\.(png|jpg|jpe?g|svg)$/)); 
    
    const arraypickleballImages = [];
    Object.keys(pickleballImages).map((pi, index) =>  arraypickleballImages.push(pickleballImages[pi]));  
    setPickleBallImages(arraypickleballImages);

    //badminton photos
    const badmintonImages = importAll(require.context('./assets/sportingevents/badminton', false, /\.(png|jpg|jpe?g|svg)$/)); 
    
    const arraybadmintonImages = [];
    Object.keys(badmintonImages).map((bi, index) =>  arraybadmintonImages.push(badmintonImages[bi]));  
    setBadmintonImages(arraybadmintonImages);
    
  },[]);

  return (    
    <Routes>
          <Route path="/" element={ <Navigation />}>
              <Route index element= { <HeroSection/> }></Route>                            
              <Route path="/events" element= { <EventCalendar /> } />  
              <Route path="/volunteer" element= { <Volunteer /> } /> 
              <Route path="/photos" element= { <PhotoGallery photos={imageArray} clayganeshaPhotos={clayGaneshaimageArray} 
                badmintonPhotos={badmintonImageArray} pickleballPhotos = {pickleBallImageArray} cricketPhotos={cricketImageArray} ttPhotos={ttImageArray} /> } />   
              <Route path="/gameintro" element= { <GameIntro /> } />
              <Route path="/playgame" element= { <PhotoGame /> } />     
              <Route path="/gameover" element= { <GameOver /> } />
              <Route path="/secreteditor" element= { <ScheduleEditor /> } />               
            </Route>
    </Routes>   
  );
}

export default App;

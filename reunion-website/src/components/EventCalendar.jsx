import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import eventsflyer from '../assets/olmphotos/EventsFlyer2025.png';


const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    setIsLoading(true);
    const getBlogs = db.collection('olmvinayakachavithi2025').onSnapshot((snapshot) => {
      const posts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));      
      setEvents(posts);
    setIsLoading(false);
    });

    return () => getBlogs();
  }, []);

  return (
        <div className="max-w-4xl mx-auto my-10 flex flex-col items-center space-y-2 text-center p-2">
                <div className='flex flex-wrap justify-around  p-1 w-full'>
                    <img src={eventsflyer} alt="logo" className='rounded-lg w-[370px] h-[490px] mb-1'/>                    
                 </div>                                     
            </div>
    );
};

export default EventCalendar;

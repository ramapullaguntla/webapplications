import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { Link } from 'react-router-dom';

const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    setIsLoading(true);
    const getBlogs = db.collection('eventCalendar').onSnapshot((snapshot) => {
      const posts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));      
      setEvents(posts);
    setIsLoading(false);
    });

    return () => getBlogs();
  }, []);

  return (
    isLoading ? <div className='flex items-center space-x-2'><div>Loading...</div><div className='bg-green-700 w-3 h-3 rounded-full animate-bounce'></div></div> 
    : <div className='bg-slate-50 my-3 flex flex-col items-center'>
      <h2 className='text-xl font-bold text-center my-3'>Event Calendar for the Ganesh Chaturdi Celebration.</h2>
      <div className='flex-col items-center space-y-4'>
            <div className="">
                        <h2 className='text-xl font-bold mb-1 text-center'>Friday</h2>
                        <table className='tab'>
                            <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2">Name</th>
                                <th className="border border-gray-300 px-4 py-2">Start</th>
                                <th className="border border-gray-300 px-4 py-2">End</th>
                            </tr>
                            </thead>
                            <tbody>
                            {events.filter(e => e.day === "Friday").sort((a,b) => a.order - b.order).map((event, index) => (
                                <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                                <td className="border border-gray-300 px-4 py-1">{event.name}</td>
                                <td className="border border-gray-300 px-4 py-1">{event.startTime}</td>
                                <td className="border border-gray-300 px-4 py-1">{event.endTime}</td>
                            </tr>
                            ))}
                            </tbody>
                        </table>
            </div>
            <div className="">
                        <h2 className='text-xl font-bold mb-1 text-center'>Saturday</h2>
                        <table className='tab'>
                            <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2">Name</th>
                                <th className="border border-gray-300 px-4 py-2">Start</th>
                                <th className="border border-gray-300 px-4 py-2">End</th>
                            </tr>
                            </thead>
                            <tbody>
                            {events.filter(e => e.day === "Saturday").sort((a,b) => a.order - b.order).map((event, index) => (
                                <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                                <td className="border border-gray-300 px-4 py-1">{event.name}</td>
                                <td className="border border-gray-300 px-4 py-1">{event.startTime}</td>
                                <td className="border border-gray-300 px-4 py-1">{event.endTime}</td>
                            </tr>
                            ))}
                            </tbody>
                        </table>
            </div>
            <div className="">
                        <h2 className='text-xl font-bold mb-1 text-center'>Sunday</h2>
                        <table className='tab'>
                            <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2">Name</th>
                                <th className="border border-gray-300 px-4 py-2">Start</th>
                                <th className="border border-gray-300 px-4 py-2">End</th>
                            </tr>
                            </thead>
                            <tbody>
                            {events.filter(e => e.day === "Sunday").sort((a,b) => a.order - b.order).map((event, index) => (
                                <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                                <td className="border border-gray-300 px-4 py-1">{event.name}</td>
                                <td className="border border-gray-300 px-4 py-1">{event.startTime}</td>
                                <td className="border border-gray-300 px-4 py-1">{event.endTime}</td>
                            </tr>
                            ))}
                            </tbody>
                        </table>
            </div>
      </div>  
       

      <div>
            
      </div>         
      
    </div>
  );
};

export default EventCalendar;

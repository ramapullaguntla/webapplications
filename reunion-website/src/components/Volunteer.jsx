import React, { useEffect, useState } from 'react';
import { db } from '../firebase';

const Volunteer = () => {
  const [volunteerList, setVolunteers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    setIsLoading(true);
    const getBlogs = db.collection('olmvolunteers2025').onSnapshot((snapshot) => {
      const posts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));      
      setVolunteers(posts);
    setIsLoading(false);
    });

    return () => getBlogs();
  }, []);

  return (
    isLoading ? <div className='flex items-center space-x-2'><div>Loading...</div><div className='bg-green-700 w-3 h-3 rounded-full animate-bounce'></div></div> 
    : <div className='bg-slate-50 my-3 flex flex-col items-center'>
      <h2 className='text-2xl font-bold text-center my-3'>We are looking for volunteers to make this event a huge success. These are the current volunteers.</h2>
      <div>
            <div className="">                        
                        <table className=''>
                            <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2">Category</th>
                                <th className="border border-gray-300 px-4 py-2">Volunteers</th>                                
                            </tr>
                            </thead>
                            <tbody>
                            {volunteerList.sort((a,b) => a.order - b.order).map((event, index) => (
                                <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                                <td className="border border-gray-300 px-4 py-1 font-semibold">{event.category}</td>
                                <td className="border border-gray-300 px-4 py-1">{event.volunteers}</td>                               
                            </tr>
                            ))}
                            </tbody>
                        </table>
            </div>
      </div>                             
      <div className='text-xl m-2 font-bold text-start'>If interested in volunteering, please reach out to Ravi Chennu.</div>
    </div>
  );
};

export default Volunteer;

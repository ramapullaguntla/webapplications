import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    setIsLoading(true);
    const getBlogs = db.collection('blogPosts').onSnapshot((snapshot) => {
      const posts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      console.log("blogs are ", posts);
      setBlogPosts(posts);
    setIsLoading(false);
    });

    return () => getBlogs();
  }, []);

  return (
    isLoading ? <div className='flex items-center space-x-2'><div>Loading...</div><div className='bg-green-700 w-3 h-3 rounded-full animate-bounce'></div></div> 
    : <div className='bg-slate-50 my-3 flex flex-col items-center'>
      <h2 className='text-2xl font-bold text-center my-3'>See what your fellow students wrote</h2>
      <div className='p-5 grid gap-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
        {blogPosts.map((post) => (
            
            <div class="flex flex-col flex-wrap items-start space-y-3 p-5 rounded-lg bg-gray-700">                                      
                    <div class="flex space-x-3 items-center justify-start self-start">                       
                        <div>
                            <div class="text-white text-md">{post.name}</div>                            
                        </div>
                    </div>                    
                    <p class="text-sm text-gray-300 leading-6 line-clamp-5 hover:line-clamp-none">{post.content}</p>
                </div>
        ))}
      </div>      
       <Link to='/addblog'><button className="text-lg text-white my-3 px-2 py-2 bg-blue-600 rounded-md">Write your experience</button></Link>          
      
    </div>
  );
};

export default Blog;

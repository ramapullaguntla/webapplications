import React, { useState } from 'react';
import { db } from '../firebase';
import firebase from 'firebase/compat/app';
import { useNavigate } from 'react-router-dom';

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('blogPosts').add({
      title,
      name,
      content,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
      setTitle('');
      setContent('');
      alert('Blog post added successfully!');

      navigate('/blogs');
    })
    .catch((error) => {
      console.error('Error adding blog post: ', error);
      alert('Error adding blog post. Please try again.');
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center my-5">

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            <label htmlFor="Name" className='text-lg font-medium md:text-center'>Name:</label>
            <input className='p-1 border border-gray-600 rounded-md' type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      
      
            <label htmlFor="title" className='text-lg font-medium md:text-center'>Title:</label>
            <input className='p-1 border border-gray-600 rounded-md' type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      
      
            <label htmlFor="content" className='text-lg font-medium md:text-center'>Content:</label>
            <textarea className='p-1 border resize-none min-w-80 min-h-60  border-gray-600 rounded-md'  id="content" value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
       <div>
           <button className="text-lg text-white my-3 px-2 py-1 bg-blue-600 rounded-md" type="submit">Submit</button>               
        </div>  
    </form>
  );
};

export default BlogForm;

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
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-2 m-5 h-[700px]">

      <div className="flex space-x-5">
            <label htmlFor="Name" className='text-xl font-medium text-center w-44'>Name:</label>
            <input className='p-1 border w-80 border-gray-600 rounded-md' type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="flex space-x-5">
            <label htmlFor="title" className='text-xl font-medium text-center w-44'>Title:</label>
            <input className='p-1 border w-80 border-gray-600 rounded-md' type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="flex space-x-5">
            <label htmlFor="content" className='text-xl font-medium text-center w-44'>Content:</label>
            <textarea className='p-1 border w-80 h-80 resize-none  border-gray-600 rounded-md'  id="content" value={content} onChange={(e) => setContent(e.target.value)} />
       </div>
       <div className="space-x-2">
           <button className="bg-slate-400 rounded-md text-black px-5 py-1 my-5 text-center" type="submit">Post</button>               
        </div>  
    </form>
  );
};

export default BlogForm;

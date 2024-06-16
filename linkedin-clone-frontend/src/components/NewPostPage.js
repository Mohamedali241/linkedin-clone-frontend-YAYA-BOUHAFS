import React, { useState } from 'react';
import api from '../api';

const NewPostPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/posts', { title, content }).then((response) => {
      // Rediriger vers la page d'accueil ou afficher un message de succès
    }).catch((error) => {
      console.error('Error creating post:', error);
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Content</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} className="w-full p-2 border rounded" />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default NewPostPage;

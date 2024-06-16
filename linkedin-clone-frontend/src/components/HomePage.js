import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get('/posts').then((response) => {
      setPosts(response.data);
    }).catch((error) => {
      console.error('Error fetching posts:', error);
    });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-700">{post.author}</p>
            <p>{post.content.substring(0, 100)}...</p>
            <Link to={`/post/${post.id}`} className="text-blue-500 hover:underline">Read more</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

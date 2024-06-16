import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api';

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    api.get(`/posts/${id}`).then((response) => {
      setPost(response.data);
    }).catch((error) => {
      console.error('Error fetching post:', error);
    });
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-4 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700">by <Link to={`/user/${post.authorId}`} className="text-blue-500 hover:underline">{post.author}</Link></p>
        <p>{post.content}</p>
        <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
      </div>
    </div>
  );
};

export default PostPage;

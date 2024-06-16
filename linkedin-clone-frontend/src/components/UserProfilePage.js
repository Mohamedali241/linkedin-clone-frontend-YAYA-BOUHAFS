import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';

const UserProfilePage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    api.get(`/users/${id}`).then((response) => {
      setUser(response.data);
    }).catch((error) => {
      console.error('Error fetching user:', error);
    });
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-4 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">{user.name}</h1>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Education:</strong> {user.education}</p>
        <p><strong>Skills:</strong> {user.skills}</p>
        <p><strong>Experience:</strong> {user.experience}</p>
        <p><strong>Connections:</strong> {user.connections}</p>
        <button className="bg-blue-500 text-white p-2 rounded">Edit Profile</button>
      </div>
    </div>
  );
};

export default UserProfilePage;

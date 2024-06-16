import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex space-x-4 text-white">
        <li>
          <Link to="/" className="hover:text-gray-300">Home</Link>
        </li>
        <li>
          <Link to="/new-post" className="hover:text-gray-300">New Post</Link>
        </li>
        <li>
          <Link to="/user/1" className="hover:text-gray-300">Profile</Link> {/* Remplacer par l'ID de l'utilisateur actuel */}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

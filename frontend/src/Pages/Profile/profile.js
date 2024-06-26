import React, { useContext } from 'react';
import { Context } from '../store/context';
import './profile.css';
import NavBar from '../Navbar/navbar';

const UserProfile = () => {
  const [currentUser] = useContext(Context);

  return (
    <div><NavBar/>
    <div className="profile-container">
      <h1>User Profile</h1>
      {currentUser ? (
        <div className="user-info">
          <p><strong>Name:</strong> {currentUser.name}</p>
          <p><strong>Email:</strong> {currentUser.email}</p>
        </div>
      ) : (
        <p>No user information available. Please log in.</p>
      )}
    </div>
    </div>
  );
};

export default UserProfile;

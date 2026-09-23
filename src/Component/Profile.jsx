import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext';

const Profile = () => {

    const { name, location } = useContext(UserContext);

  return (
    <div>
      <h2>This is Profile</h2>
      <p>Name: {name}</p>
      <p>Location: {location}</p>
    </div>
  )
}

export default Profile

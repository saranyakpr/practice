import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext';

const About = () => {

    const { location, setLocation } = useContext(UserContext);

  return (
    <div>
      <input 
        type="text" 
        placeholder='Enter your location'
        value={location}
        onChange={(e)=>setLocation(e.target.value)}
       />
    </div>
  )
}

export default About

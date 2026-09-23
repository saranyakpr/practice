import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext';
import About from './About';
import Profile from './Profile';

const Home = () => {

    const { name, setName } = useContext(UserContext);

  return (
    <>
        <div>
        <input 
            type="text" 
            placeholder='Enter your name'
            value={name}
            onChange={(e)=>setName(e.target.value)}
        />
        </div>
        <About/>
        <Profile/>
    </>
  )
}

export default Home

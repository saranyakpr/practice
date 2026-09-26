import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAge, setLocation, setName } from './nameSlice';

const Home = () => {

  const name = useSelector((state)=>state.user.name);
  const age = useSelector((state)=>state.user.age);
  const location = useSelector((state)=>state.user.location);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{location}</h2>
      <button onClick={()=>dispatch(setName('saranya'))}>change name</button><br/>
      <button onClick={()=>dispatch(setAge(26))}>change age</button><br/>
      <button onClick={()=>dispatch(setLocation('tvl'))}>change location</button><br/>
    </div>
  )
}

export default Home

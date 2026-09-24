import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'

const About = () => {

    const {name, location} = useContext(UserContext)

  return (
    <div>
        <h1>this value from about</h1>
      <h1>Name:{name}</h1>
      <h1>Location:{location}</h1>
    </div>
  )
}

export default About

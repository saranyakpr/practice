import React from 'react'
import { Link } from 'react-router-dom'

const Parent = () => {
  return (
    <div>
      <h2>parent</h2>
      <Link to="/child">Go to Child</Link>
    </div>
  )
}

export default Parent

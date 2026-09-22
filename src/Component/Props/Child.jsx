import React from 'react'
import { useNavigate } from 'react-router-dom'

const Child = () => {

  const nav = useNavigate()

  return (
    <div>
      <h2>child</h2>
      <button onClick={() => nav('/')}>back to parent</button>
    </div>
  )
}

export default Child

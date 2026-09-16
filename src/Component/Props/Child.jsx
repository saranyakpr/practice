import React from 'react'
import Button from './Button'

const Child = ({handleClick}) => {
  return (
    <div>
      <Button text="Decrement" handleClick={handleClick}/>
    </div>
  )
}

export default Child

import React from 'react'

const Child = (props) => {
  return (
    <div>
      child: {props.data.name}, age: {props.data.age}
    </div>
  )
}

export default Child

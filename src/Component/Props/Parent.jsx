import React, { useState } from 'react'
import Button from './Button';
import Child from './Child';

const Parent = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

  return (
    <div>
        {count}
      <Button text="Increment" handleClick={increment}/>
      <Child handleClick={decrement}/>
    </div>
  )
}

export default Parent

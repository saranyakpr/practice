import React, { useEffect, useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [state, setState] = useState(0)

    const data = {
        name: "saran",
        age: 25
    }

    useEffect(()=>{
        console.log('print')
    }, [state])

  return (
    <div>
      parent
      <Child name="Alice" age={25} data={data} />
      <button onClick={()=>setState(state+1)}>click</button>
      <p>State: {state}</p>
    </div>
  )
}

export default Parent
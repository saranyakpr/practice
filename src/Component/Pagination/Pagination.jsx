import React, { useEffect, useState } from 'react'

const Pagination = () => {

    const [data, setData] = useState();

    useEffect(()=>{
        const fetchData = fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res=>res.json())
        .then(data=>setData(data))
        .catch(err=>console.log(err))
    }, [])

  return (
    <div>
      {data?.map((val)=>(
        <div key={val.id}>
            <p>{val.id} - {val.title}</p>
        </div>
      ))}
    </div>
  )
}

export default Pagination

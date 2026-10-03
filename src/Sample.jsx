import axios from 'axios'
import { useEffect, useState } from 'react'

const Sample = () => {

    const [data, setData] = useState([]);

    const getData = async () =>{
        const data =  await axios.get('https://jsonplaceholder.typicode.com/users');
        setData(data.data);
    }
    
    useEffect(()=>{
        getData();
    }, []);

    const postData = async () =>{
        const data =  await axios.post('https://jsonplaceholder.typicode.com/users', {
            name: 'John Doe',
            email: 'john@gmail.com',
        });
        setData((prevData) => [...prevData, data.data]);
    }

  return (
    <div>
      {data.map(val => (
        <div key={val.id}>
          <span>{val.id}</span> - <span>{val.name}</span> - <span>{val.email}</span>
        </div>
      ))}
      <button onClick={postData}>add user</button>
    </div>
  )
}

export default Sample

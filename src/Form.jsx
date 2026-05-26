import React, { useState } from 'react'

const Form = () => {

  const [formData, setFormData] = useState({
    name:'',
    email:'',
    count:0,
  })
  const [err, setErr] = useState({
    nameErr:'',
    emailErr:'',
    countErr:'',
  })
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  const validate = () =>{
    let isValid = true;
    let errors = {
      nameErr:'',
      emailErr:'',
      countErr:'',
    }

    if(!formData.name.trim()){
      errors.nameErr = 'Name is required';
      isValid = false;
    }
    if(!formData.email.trim()){
      errors.emailErr = 'Email is required';
      isValid = false;
    }
    if(!formData.count){
      errors.countErr = 'Count is required';
      isValid = false;
    }

    setErr(errors);
    return isValid;

  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(validate()){
      const newData ={
        id: Date.now(),
        ...formData,
      }
      setData([...data, newData]);
      setFormData({
        name:'',
        email:'',
        count:0,
      })
    }
  }

  const filterData = data.filter((val)=>
    val.name.toLowerCase().includes(search.toLowerCase()) ||
    val.email.toLowerCase().includes(search.toLowerCase()) ||
    val.count.toString().includes(search)
  )

  const sortType = (type)=>{
    let sortData = [...filterData];
    if(type === 'up'){
      sortData.sort((a, b)=>a.count - b.count);
    }
    else if(type === 'down'){
      sortData.sort((a, b)=>b.count - a.count);
    }
    setData(sortData);
  }

  const handleDelete = (id)=>{
    const newData = data.filter((item)=>item.id !== id);
    setData(newData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-64 mx-auto mt-10'>
        <input type='text' placeholder='Name' value={formData.name} onChange={(e)=>setFormData({...formData, name:e.target.value})} />
        {err.nameErr && <p style={{color:'red'}}>{err.nameErr}</p>}
        <input type='email' placeholder='Email' value={formData.email} onChange={(e)=>setFormData({...formData, email:e.target.value})} />
        {err.emailErr && <p style={{color:'red'}}>{err.emailErr}</p>}
        <input type='number' placeholder='Count' value={formData.count} onChange={(e)=>setFormData({...formData, count:Number(e.target.value)})} />
        {err.countErr && <p style={{color:'red'}}>{err.countErr}</p>}
        <button type='submit'>Submit</button>
      </form>
      {data.length > 0 && (
        <div className='mt-10 w-64 mx-auto'>
          <h2 className='text-lg font-bold mb-4'>Submitted Data:</h2>
          <div>
            <input type="search" placeholder='Search...' value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <button onClick={()=>{sortType('up')}}>up</button>
            <button onClick={()=>{sortType('down')}}>down</button>
          </div>
          {filterData.map((item, index) => (
            <>
              <div key={item.id} className='border border-gray-300 p-4 mb-4'>
                <p className='text-center'>Id: {item.id}</p>
                <p className='text-center'>Name: {item.name}</p>
                <p className='text-center'>Email: {item.email}</p>
                <p className='text-center'>Count: {item.count}</p>
              </div>
              <div>
                <button onClick={()=>{handleDelete(item.id)}}>Delete</button>
              </div>
            </>
          ))}
        </div>
      )}
    </div>
  )
}

export default Form
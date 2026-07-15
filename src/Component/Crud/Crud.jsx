// import React, { useState } from 'react'

// const crud = () => {

//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         count: ''
//     })
//     const [data, setData] = useState([]);
//     const [err, setErr] = useState({
//         nameErr: '',
//         emailErr: '',
//         countErr: ''
//     })
//     const [editId, setEditId] = useState(null);
//     const [search, setSearch] = useState('');

//     const validate = () =>{
//         let isValid = true;
//         let errors = {
//             nameErr: '',
//             emailErr: '',
//             countErr: ''
//         }
//         if(formData.name.trim() === ''){
//             errors.nameErr = 'Name is required';
//             isValid = false;
//         }
//         else if(formData.email.trim() === ''){
//             errors.emailErr = 'Email is required';
//             isValid = false;
//         }
//         else if(formData.count.trim() === ''){
//             errors.countErr = 'Count is required';
//             isValid = false;
//         }
//         setErr(errors);
//         return isValid;
//     }

//     const handleSubmit = (e) =>{
//         e.preventDefault();
//         if(editId){
//             setData(data.map(item => item.id === editId ? {...item, ...formData} : item));
//             setEditId(null);
//             setFormData({
//                 name: '',
//                 email: '',
//                 count: ''
//             })
//             // return;
//         }
//         else{
//             // if(validate()){
//             const newData ={
//                 id: Date.now(),
//                 ...formData
//             }
//             setData([...data, newData]);
//             setFormData({
//                 name: '',
//                 email: '',
//                 count: ''
//             })
//         // }
//         }
//     }

//     const handleDelete = (id) =>{
//         setData(data.filter(item => item.id !== id));
//     }

//     const handleEdit = (item) =>{
//         setFormData({
//             name: item.name, 
//             email: item.email,
//             count: item.count
//         })
//         setEditId(item.id);
//     }
    
//     const filterData = data.filter((val)=>
//         val.name.toLowerCase().includes(search.toLowerCase()) ||
//         val.email.toLowerCase().includes(search.toLowerCase()) ||
//         val.count.toString().includes(search)
//     )

//     const handleSort = (type) =>{
//         let sortData = [...filterData];
//         if(type === "up"){
//             sortData.sort((a, b)=>a.count - b.count);
//         }
//         else if(type === "down"){
//             sortData.sort((a, b)=>b.count - a.count);
//         }
//         setData(sortData);
//     }

//   return (
//     <div>
//         <form className='flex flex-col gap-3 w-[300px] mx-auto mt-10' onSubmit={handleSubmit}>
//             <input 
//                 className='border border-gray-300 p-2' type="text"  
//                 placeholder='name' 
//                 value = {formData.name}
//                 onChange={(e)=>setFormData({...formData, name: e.target.value})}
//             />
//             <span className='text-red-500'>{err.nameErr}</span>
//             <input 
//                 className='border border-gray-300 p-2' 
//                 type="email"  
//                 placeholder='email' 
//                 value = {formData.email}
//                 onChange={(e)=>setFormData({...formData, email: e.target.value})}
//             />
//             <span className='text-red-500'>{err.emailErr}</span>
//             <input 
//                 className='border border-gray-300 p-2' 
//                 type="number"  
//                 placeholder='count' 
//                 value = {formData.count}
//                 onChange={(e)=>setFormData({...formData, count: e.target.value})}
//             />
//             <span className='text-red-500'>{err.countErr}</span>
//             <button 
//                 className='bg-blue-500 text-white p-2 rounded cursor-pointer'>
//                 {editId ? "Update" : "Submit"}
//             </button>
//         </form>
//         {data.length > 0 && (
//             <div className="">
//                 <div className="w-[300px] mx-auto mt-10">
//                     <input type="search" placeholder="Search..." value={search} onChange={(e)=>setSearch(e.target.value)} />
//                 </div>
//                 <div className="w-[300px] mx-auto mt-10">
//                     <button className='bg-green-500 text-white p-2 rounded cursor-pointer' onClick={()=>handleSort("up")}>Up</button>
//                     <button className='bg-green-500 text-white p-2 rounded cursor-pointer ml-2' onClick={(e)=>{handleSort("down")}}>Down</button>
//                 </div>
//             </div>
//         )}
//         <div className='w-[300px] mx-auto mt-10'>
//             {filterData.map((item, i)=>(
//                 <div key={i} className='border border-gray-300 p-2 m-2'>
//                     <div className="flex flex-col items-center gap-2">
//                         <p>Name: {item.name}</p>
//                         <p>Email: {item.email}</p>
//                         <p>Count: {item.count}</p>
//                     </div>
//                     <div className='flex justify-between mt-2'>
//                         <button className='bg-yellow-500 text-white p-2 rounded mr-2 cursor-pointer' onClick={()=>handleEdit(item)}>Edit</button>
//                         <button className='bg-red-500 text-white p-2 rounded cursor-pointer' onClick={()=>handleDelete(item.id)}>Delete</button>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     </div>
//   )
// }

// export default crud





import React, { useEffect, useState } from 'react'

const Form = () => {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setData(data))
    .catch(err=>console.log(err))
  })

  const filterData = data.filter((item)=>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.email.toLowerCase().includes(search.toLowerCase())
   )


  return (
    <div>
        <input 
            type="text" 
            placeholder='search' 
            value={search} 
            onChange={(e)=>setSearch(e.target.value)} 
            className='border border-gray-700'
        />
      {filterData.map((val)=>(
        <div key={val.id} className='flex gap-2'>
          <p>{val.id}</p>
          <p>{val.name} - {val.email}</p>
        </div>
      ))}
    </div>
  )
}

export default Form

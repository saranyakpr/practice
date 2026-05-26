import { useMutation } from '@tanstack/react-query'
import React, { useState } from 'react'
import { emailVerify } from '../Api/Api'
import { redirect } from 'react-router-dom';

const Mutation = () => {

    const[email, setEmail] = useState('');

    const mutation = useMutation({
        mutationFn: emailVerify,
        onSuccess: (data) => {
            console.log('data', data);  
        },
        onError: (error) => {
            console.log('error', error);
        }
    })

    const handleSubmit = () => {
        if(!email) return alert('Email is required');
        const payload = {
            userCode:'talent',
            userEmail: email,
            redirectUrl: 'https://www.youtube.com/'
        }
        console.log('payload', payload);
        mutation.mutate(payload);   
    }

  return (
    <div>
        <input type="email" placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>

        {mutation.isLoading && <p>Loading...</p>}
        {mutation.isError && <p style={{color:'red'}}>Error: {mutation.error.message}</p>}
        {mutation.isSuccess && <p style={{color:'green'}}>Success: {JSON.stringify(mutation.data)}</p>}
    </div>
  )
}

export default Mutation
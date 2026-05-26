import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getRole } from '../Api/Api'

const Query = () => {
    
  const { isLoading, error, data } = useQuery({
    queryKey: ['roles'],
    queryFn: getRole,
  })

  if (isLoading) return <h2>Loading...</h2>
  if (error) return <h2>Error: {error.message}</h2>

  console.log('roles', data?.data?.roles)

  return (
    <div>
        {data?.data?.roles?.map((role, i)=>{
            return <div key={role?.id}>{role?.name}</div>
        })}
    </div>
  )
}

export default Query

import { useQueries } from '@tanstack/react-query'
import { getRelation, getRole } from '../Api/Api'

const Queries = () => {

    const results = useQueries({
        queries: [
            { queryKey: ['roles'], queryFn: getRole },
            { queryKey: ['relationships'], queryFn: getRelation }
        ]})

    const [roles, relationships] = results;

    if (roles.isLoading || relationships.isLoading) return <h2>Loading...</h2>
    if (roles.error) return <h2>Error: {roles.error.message}</h2>
    if (relationships.error) return <h2>Error: {relationships.error.message}</h2>

  return (
    <div>
        <h2>role</h2>
        {roles.data?.data?.roles?.map((role, i)=>{
            return <div key={role?.id}>{role?.name}</div>
        })}
        <h2>relationships</h2>
        {relationships?.data?.data?.map((relation, i)=>{
            return <div key={relation?.id}>{relation?.name}</div>
        })}
    </div>
  )
}

export default Queries
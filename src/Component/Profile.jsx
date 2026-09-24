import { useContext } from "react"
import { UserContext } from "../Context/UserContext"

const Profile = () => {

    const {location, setLocation} = useContext(UserContext)

  return (
    <div>
        <input 
            type="text" 
            placeholder="enter your location"
            value={location}
            onChange={(e)=>setLocation(e.target.value)}
        />
    </div>
  )
}

export default Profile

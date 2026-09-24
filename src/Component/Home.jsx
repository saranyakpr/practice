import { useContext } from "react"
import { UserContext } from "../Context/UserContext"
import Profile from "./Profile"
import About from "./About"

const Home = () => {

    const {name, setName} = useContext(UserContext)

  return (
    <>
        <div>
            <h1>this is home</h1>
            <input 
                type="text" 
                placeholder="enter your name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
        </div>
        <Profile/>
        <About/>
    </>
  )
}

export default Home

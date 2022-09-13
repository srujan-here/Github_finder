import { set } from 'mongoose'
import React,{useState,useEffect} from 'react'
// import Userlists from '../components/users/Userlists'

function Home() {
  const [users,setusers]=useState([])
  const [loading,setloading] =useState(true)

  useEffect(()=>{
    getusers()

  },[])

  const getusers= async ()=>{
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`)

    const data= await response.json()
    setusers(data)
    setloading(false)


  }

  if(!loading){
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user)=>(
          <h1>{user.login}</h1>
        ))}
        
      </div>
    )

  }
  else{
    return <h1>Loading...</h1>
  }
  
}

export default Home

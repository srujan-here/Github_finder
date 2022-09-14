import React,{useState,useEffect} from 'react'
import Spinner from '../components/layouts/Spinner'
import Useritems from '../components/users/Useritems'
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
          <Useritems key={user.id} user={user}/>
        ))}
        
      </div>
    )

  }
  else{
    return <Spinner />
  }
  
}

export default Home

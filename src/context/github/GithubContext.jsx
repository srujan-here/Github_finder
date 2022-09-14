import {createContext,useState} from 'react'

const GithubContext = createContext()

const GITHUB_URL=process.env.REACT_APP_GITHUB_URL


export const GithubProvider=({children})=>{
    const [users,setusers]=useState([])
  const [loading,setloading] =useState(true)

  const getusers = async ()=>{
    const response = await fetch(`${GITHUB_URL}/users`)

    const data= await response.json()
    setusers(data)
    setloading(false)
  }

    


    return <GithubContext.Provider value={{users,loading,getusers}}>
    {children}
  </GithubContext.Provider>

  }


  




export default GithubContext
import {createContext,useReducer} from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

const GITHUB_URL=process.env.REACT_APP_GITHUB_URL


export const GithubProvider=({children})=>{
//     const [users,setusers]=useState([])
//   const [loading,setloading] =useState(true)

const initialState ={
    users:[],
    loading:false,
}


//get initial users

  const getusers = async ()=>{
    setloading()

    const response = await fetch(`${GITHUB_URL}/users`)

    const data= await response.json()
    // setusers(data)
    // setloading(false)

    dispatch({
        type: 'GET_USERS',
        payload: data
    })
  }

  const [state,dispatch] = useReducer(githubReducer,initialState)


const setloading =()=>{
    dispatch({type: 'SET_LOADING'})
}

    


    return <GithubContext.Provider value={{users:state.users,loading:state.loading,getusers}}>
    {children}
  </GithubContext.Provider>

  }


  




export default GithubContext
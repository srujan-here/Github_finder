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

  const searchusers = async (text)=>{
    setloading()
    const params=new URLSearchParams({q:text})

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`)

    const {items}= await response.json()
    // setusers(data)
    // setloading(false)

    dispatch({
        type: 'GET_USERS',
        payload: items,
    })
  }

  const [state,dispatch] = useReducer(githubReducer,initialState)

// setloading
const setloading =()=>{
    dispatch({type: 'SET_LOADING'})
}

//clearusers
const clearusers=()=>{
    console.log('clearusers')
    dispatch({type: 'CLEAR_USERS'})
}

    


    return <GithubContext.Provider value={{users:state.users,loading:state.loading,searchusers,clearusers}}>
    {children}
  </GithubContext.Provider>

  }


  




export default GithubContext
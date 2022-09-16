import {createContext,useReducer} from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

const GITHUB_URL=process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN=process.env.REACT_APP_GITHUB_TOKEN



export const GithubProvider=({children})=>{
//     const [users,setusers]=useState([])
//   const [loading,setloading] =useState(true)

const initialState ={
    users:[],
    user:{},
    loading:false,
}


//get initial users

  const searchusers = async (text)=>{
    setloading()
    const params=new URLSearchParams({q:text})

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`,{
      
    })

    const {items}= await response.json()
    // setusers(data)
    // setloading(false)

    dispatch({
        type: 'GET_USERS',
        payload: items,
    })
  }


  // get searched user

  const getuser = async (login)=>{
    setloading()
   console.log(login)

    const response = await fetch(`${GITHUB_URL}/users/${login}`)

  //  console.log(response)

    // setusers(data)
    // setloading(false)
    if(response.status===404){
      window.location='/notfound'
    }
    else{
      const data= await response.json()
      dispatch({
        type: 'GET_USER',
        payload: data,
    })


    }

    
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

    


    return <GithubContext.Provider value={{users:state.users,user:state.user,getuser,loading:state.loading,searchusers,clearusers}}>
    {children}
  </GithubContext.Provider>

  }


  




export default GithubContext
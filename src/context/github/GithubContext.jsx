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
    repos:[],
    loading:false,
}


//get initial users

  


 



  const [state,dispatch] = useReducer(githubReducer,initialState)





    return <GithubContext.Provider value={{users:state.users,
   ...state,
   dispatch,
    }}>
    {children}
  </GithubContext.Provider>

  }







export default GithubContext
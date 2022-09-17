const GITHUB_URL=process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN=process.env.REACT_APP_GITHUB_TOKEN

export const searchusers = async (text)=>{
   
    const params=new URLSearchParams({q:text})

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`,{
      
    })

    const {items}= await response.json()
    // setusers(data)
    // setloading(false)

    return items
  }


   // get searched user

  export const getuser = async (login)=>{
    

    const response = await fetch(`${GITHUB_URL}/users/${login}`)

  //  console.log(response)

    // setusers(data)
    // setloading(false)
    if(response.status===404){
      window.location='/notfound'
    }
    else{
      const data= await response.json()
     return data

    }

    
  }



  export const getrepos= async (login)=>{
    const params =new URLSearchParams({
      sort:'created',
      per_page:10,
    })



    const response= await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`)
    if(response.status===404){
      window.location='/notfound'
    }
    else{
      const data= await response.json()
      return data


  }
  }
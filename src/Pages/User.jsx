import React from 'react'
import {FaCodepen,FaStore,FaUserFriends,FaUsers} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Spinner from'../components/layouts/Spinner'
import {useContext,useEffect} from 'react'
import GithubContext from '../context/github/GithubContext'
import {useParams} from 'react-router-dom'


function User() {

    const {user,getuser,loading} = useContext(GithubContext)
    const params = useParams()

    useEffect(() => {
        getuser(params.login)

    },[])

    const {
        name,
        type,
        avatar_url,
        location,
        bio,
        blog,
        twitter_username,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
      } = user



    if(loading) {
        return <Spinner />
    }
  return (
    <div>
        <div className='text-4xl text-white-600'>Sankalp loves {user.login}</div>
   
 
    </div>
  )
}

export default User

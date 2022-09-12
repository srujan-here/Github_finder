import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({title}) {
  return (
    <nav className="navbar bg-neutral shadow-lg mb-12  text-primary-content">
    <div className="container mx-auto">
       <div className="flex-none mx-2 px-2 ">
       <FaGithub className="inline pr-2 text-4xl" />
       <Link to='/sru' className="text-lg align-middle font-bold ">
        {title}
       </Link>
        </div>

        <div className="flex-1 px-2 mx-2">
            <div className="flex justify-end">
            <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
                Home
            </Link>
            <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
                About
            </Link>

            </div>
        </div>
        
    </div>
    </nav>
  )
}

Navbar.defaultProps = {
    title: 'Github Finder',
}
Navbar.propTypes={
    title: PropTypes.string
}

export default Navbar
import React from 'react'

function About() {
  return <div className="text-center">
  <h1 className='text-6xl mb-4'>Github Finder</h1>
  <p className='mb-4 text-2xl font-light'>
    A React app to search GitHub profiles and see profile details. 
    .
  </p>
  <p className='text-lg text-gray-900'>
    Version <span className='text-black'>1.0.0</span>
  </p>
  <p className='text-lg text-gray-900'>
    Layout By:
    <a className=' px-3' href='https://www.linkedin.com/in/srujan-here/'>
    <div className="badge badge-primary text-md">Srujan Putta</div>
 
    </a>
  </p>


  {/* repo details */}

  <p className='text-lg text-gray-900'>
    Wanna Contribute to the Project ? :
    <a className='text-black p-3' href='https://github.com/srujan-here/Github_finder' target='_blank'>
    <div className="badge badge-primary text-md">Git Repo</div>

    </a>
  </p>
  </div>
}

export default About

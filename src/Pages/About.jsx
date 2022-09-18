import React from 'react'

function About() {
  return <>
  <h1 className='text-6xl mb-4'>Github Finder</h1>
  <p className='mb-4 text-2xl font-light'>
    A React app to search GitHub profiles and see profile details. 
    .
  </p>
  <p className='text-lg text-gray-400'>
    Version <span className='text-white'>1.0.0</span>
  </p>
  <p className='text-lg text-gray-400'>
    Layout By:
    <a className='text-white px-3' href='https://twitter.com/This_IsSrujan'>
     Srujan Putta
    </a>
  </p>


  {/* repo details */}

  <p className='text-lg text-gray-400'>
    Wanna Contribute to the Project ? :
    <a className='text-white p-3' href='https://github.com/srujan-here/Github_finder' target='_blank'>
    Git Repo
    </a>
  </p>
  </>
}

export default About

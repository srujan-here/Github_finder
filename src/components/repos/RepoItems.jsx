import React from 'react'
import RepoList from './RepoList'
import PropTypes from 'prop-types'
import {FaEye,FaInfo,FaLink,FaStar,FaUtilities} from 'react-icons/fa'

function RepoItems({repo}) {
  return (<div className="card">
    <div className="card-body">
        <h2 className="card-title text-6xl">{repo}</h2>
    </div>
  </div>)
}


RepoItems.prototype={
    repo:PropTypes.array.isRequired
}

export default RepoItems

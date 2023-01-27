import React from 'react'
import { useParams } from 'react-router-dom'

const ComparePage = () => {

    const {username} = useParams();

  return (
    <div>ComparePage + {username}</div>
  )
}

export default ComparePage
import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <h1 className='text-green-500 text-5xl text-center'> User: {userid} </h1>
  )
}

export default User

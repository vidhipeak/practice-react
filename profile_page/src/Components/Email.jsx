import React from 'react'
import "../Styles/Profile.css";

const Email = ({data}) => {
  return (
    <div className='cont2'>
      <h1>Mail me at</h1>
      <p>{data.email}</p>
    </div>
  )
}

export default Email

import React from 'react'
import "../Styles/Profile.css";

const BirthDay = ({data}) => {
  return (
    <div className='cont2'>
        <h1>Born On</h1>
      <p>{data.dob.date.slice(0,10)}</p>
    </div>
  )
}

export default BirthDay

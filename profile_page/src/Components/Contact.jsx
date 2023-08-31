import React from 'react'
import "../Styles/Profile.css";

const Contact = ({data}) => {
  return (
    <div className='cont2'>
      <h1>Contact me</h1>
      <p>{data.cell+", "+data.phone}</p>
    </div>
  )
}

export default Contact

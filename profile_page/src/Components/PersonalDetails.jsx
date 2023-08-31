import React from 'react'
import "../Styles/Profile.css";


const PersonalDetails = ({data}) => {
    console.log(data)
  return (
    <div className='cont2'>
       <p><b>Age : </b>{data.dob.age}</p>
       <p><b>Gender :</b> {data.gender}</p>
       <p><b>Gender :</b>{data.login.username}</p>
    </div>
  )
}

export default PersonalDetails

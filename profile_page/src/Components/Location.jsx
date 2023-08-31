import React from 'react'
import "../Styles/Profile.css";

const Location = ({data}) => {
  return (
    <div className='cont2'>
       <p>{data.location.street.number+" / "+data.location.street.name+", "+data.location.city+", "+data.location.state+',\n' +data.location.country+', '+data.location.postcode}</p>
    </div>
  )
}

export default Location

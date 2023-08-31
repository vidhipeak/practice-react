import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PersonalDetails from './PersonalDetails';
import Buttons from './Buttons';
import Location from './Location';
import Email from './Email';
import Contact from './Contact';
import BirthDay from './BirthDay';
import "../Styles/Profile.css";



const Profile = () => {
const [data,setData] = useState({});
const [isLoading,setIsLoading] = useState(true);
const [component,setComponent] = useState("user");
  useEffect(()=>{
    getData()
    
  },[])
  
  
  const getData = async()=>{
    try {
      const response = await axios.get('https://randomuser.me/api/');
      console.log(response);
      setData(response.data.results[0])
      
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };
 
  const handleComponents = (btn)=>{
    setComponent(btn);
  }
  return(

  <div className='container'>
     {isLoading?(<h1>Loading...</h1>) : (
     <div>
        <div className='cont1'>
          <img src={data.picture.large} alt="logo"/> 
          <h1  className='name'>{data.name.title+' '+data.name.first+' '+data.name.last}</h1>
        </div>
        
        {component==="location"?<Location data={data}/>:component==="emial"?<Email data={data}/>:component==="phone"?<Contact data={data}/>:component==="birth"?<BirthDay data={data}/>:<PersonalDetails data={data}/>} 
        
        
        <Buttons handleComponents={handleComponents}/>
     </div>
    
    )}
  </div>)
  
  
}

export default Profile;

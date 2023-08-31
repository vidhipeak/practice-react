import React, { useState } from 'react'


const user = [
    {
        name:"a",
        status:"true"
    },
    {
        name:"b",
        status:"false"   
    },
    {
        name:"c",
        status:"false"
    }
]
const Vikas = () => {
    const [show,setShow] = useState(false);
   const handleDropbox = ()=>{
      setShow(!show);
   }

  return (
    <div>
      {user.map((el)=>(
        <div>
             <p>{el.name}</p> <span>-</span> <p onClick={()=>{handleDropbox()}}>{el.status} {show && <DropBox/>}</p>
        </div>
        
      ))}
      
    </div>
  )
}

export default Vikas;

const DropBox =() =>{
    
    return(
        <ul style={{"width":"100px","height":"200px"}}>
             <li>in progress</li>
             <li>completed</li>
             <li>not completed</li>
        </ul>
    )
        
       
}
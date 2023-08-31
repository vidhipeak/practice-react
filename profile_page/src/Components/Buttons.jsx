import React from 'react'
import { FaUserAlt} from 'react-icons/fa';
import {HiCake } from "react-icons/hi";
import {MdPlace} from "react-icons/md";
import { MdEmail} from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import "../Styles/Button.css";




const Buttons = ({handleComponents}) => {
  return (
    <div className='cont3'>
        <button onMouseEnter={()=>handleComponents("user")}><FaUserAlt className='button btn' /></button>
        <button onMouseEnter={()=>handleComponents("location")}><MdPlace className='button btn'/></button>
        <button  onMouseEnter={()=>handleComponents("emial")}><MdEmail className='button btn'/></button>
        <button onMouseEnter={()=>handleComponents("phone")}><BsFillTelephoneFill className='button btn' /></button>
        <button onMouseEnter={()=>handleComponents("birth")}><HiCake className='button btn' /></button>
        
    </div>
  )
}

export default Buttons

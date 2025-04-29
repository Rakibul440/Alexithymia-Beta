import React, { useState } from 'react'
import "./form.scss"
import { motion } from 'framer-motion'
import axios from "axios"
import { useNavigate } from "react-router-dom";


export default function Form(props) {

  const [detail, setDetail] = useState({
    title : "",
    expression : "",
    author : "",
    cover : ""
  }) 

  const navigate = useNavigate()

  const handleChange = (e)=>{
    setDetail((pre)=>({...pre,[e.target.name]:e.target.value}))
  }
  console.log(detail);
  const handleClick = (e)=>{
    e.preventDefault()
    try{
      axios.post("http://localhost:8800/explore",detail)
      navigate("/")
    }catch(err){
      console.error(err)
    }
  }
  return (
    <motion.div className='form-content'initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1,transition:{type:"spring",stiffness:50}}}>
      <form id='details' action="" >
            <input type="text"  onChange={handleChange}   name='title'   placeholder='Title' required/>
            <textarea  onChange={handleChange}   name='expression'   placeholder='Storyline' rows="5" required></textarea>
            <input type="text"  onChange={handleChange}   name='author'   placeholder='Author' required/>
            <input type="text"  onChange={handleChange}   name='cover'   placeholder='Picture url' required/>
            <motion.button onClick={handleClick}  className='addButton'whileHover={{scale:1.1}} whileTap={{scale:0.95}} >{props.add}</motion.button>
        </form>
    </motion.div>
  )
}

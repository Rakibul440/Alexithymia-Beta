import React, { useState} from 'react'
import "./updateForm.scss"
import {motion} from "framer-motion"
import axios from "axios"
import { useLocation, useNavigate} from "react-router-dom"

export default function UpdateForm(props) {

  const navigate = useNavigate()
  const location = useLocation()  //for getting the "id"
  const id = location.pathname.split("/")[2];


  const [update,setUpdate] = useState({
    title : "",
    expression : "",
    author : "",
    cover : ""
  })


  const handleChange = (e)=>{
    setUpdate((prev)=>({...prev,[e.target.name]:e.target.value}))
  }
  const handleClick = async (e)=>{
    e.preventDefault()
    try {
      await axios.put(`http://localhost:8800/explore/${id}`,update)
      navigate("/")
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <motion.div className='update-content' initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1,transition:{type:"spring",stiffness:50}}} >
      <form id='details' action="" >
            <input type="text" name='title' value={update.title} onChange={handleChange} placeholder='Title' />
            <textarea name='expression' value={update.expression} onChange={handleChange} placeholder='Storyline' rows="5"></textarea>
            <input type="text" name='author' value={update.author} onChange={handleChange} placeholder='Author' />
            <input type="text" name='cover' value={update.cover} onChange={handleChange} placeholder='Picture url' />
            <motion.button onClick={handleClick} className='addButton' whileHover={{scale:1.1}} whileTap={{scale:0.95}}>{props.add}</motion.button>
        </form>
    </motion.div>
  )
}

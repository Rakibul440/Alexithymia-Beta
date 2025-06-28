import React, { useRef,useState} from 'react'
import "./updateForm.scss"
import {motion} from "framer-motion"
import axios from "axios"
import { useLocation, useNavigate} from "react-router-dom"
import server from '../../../environment.js'
import {imgURL} from '../../feeds/content/contentData.js'; 


let defaultImg = imgURL[Math.floor(Math.random() * imgURL.length)];
let defaultAuthor = "Anonymous"

export default function UpdateForm(props) {

  const navigate = useNavigate()
  const location = useLocation()  //for getting the "id"
  const id = location.pathname.split("/")[2];

  
  const injectTag = useRef(); 
  const [update,setUpdate] = useState({
    title : "",
    expression : "",
    author : "",
    cover : ""
  })



  const handleChange = (e)=>{
    e.preventDefault()
    setUpdate((prev)=>({...prev,[e.target.name]:e.target.value}))
  }

  const handleClick = async (e)=>{
    e.preventDefault()
    
    if(!update.title || !update.expression ){
      return injectTag.current.innerHTML = "Provide all the detals!"
    }
    if(update.expression.length < 100) 
      return injectTag.current.innerHTML = "Please write more than 100 characters!"
    if(!update.cover) update.cover = defaultImg;
    if(!update.author) update.author = defaultAuthor;

    try {
      await axios.put(`${server}/explore/${id}`,update)
      navigate("/")
    } catch (err) {
      console.error("ERROR at Updating Post : ",err)
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
            <p style={{fontSize : "10px",color : "red"}} ref={injectTag}></p>
        </form>
    </motion.div>
  )
}

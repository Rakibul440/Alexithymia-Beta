import React, { useRef, useState } from 'react'
import "./form.scss"
import { motion } from 'framer-motion'
import axios from "axios"
import { useNavigate } from "react-router-dom";
import server from '../../../environment.js';
import {imgURL} from '../../feeds/content/contentData.js'; 



let defaultImg = imgURL[Math.floor(Math.random() * imgURL.length)];
let defaultAuthor = "Anonymous"

export default function Form(props) {

  const injectTag = useRef();

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
  // console.log(detail);

  const handleClick = (e)=>{
    e.preventDefault()

    if(!detail.title || !detail.expression ){
      return injectTag.current.innerHTML = "Provide all the details!"
    }
    if(detail.expression.length < 100) 
      return injectTag.current.innerHTML = "Please write more than 100 characters!"
    if(!detail.cover) detail.cover = defaultImg;
    if(!detail.author) detail.author = defaultAuthor;

    try{
      axios.post(`${server}/explore`,detail)
      navigate("/")
    }catch(err){
      console.log(`Error at creating post by user : ${err}`)
    }
  }

  return (
    <motion.div className='form-content'initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1,transition:{type:"spring",stiffness:50}}}>
      <form id='details' action="" >
            <input type="text"  onChange={handleChange}   name='title'   placeholder='Title' required/>
            <textarea  onChange={handleChange}   name='expression'   placeholder='Storyline' rows="5" required></textarea>
            <input type="text"  onChange={handleChange}   name='author'   placeholder='Author' required/>
            <input type="text"  onChange={handleChange}   name='cover'   placeholder='Picture url' required/>
            <motion.button onClick={handleClick}  className='addButton' whileHover={{scale:1.1}} whileTap={{scale:0.95}} >{props.add}</motion.button>
            <p style={{fontSize : "10px",color : "red"}} ref={injectTag}></p>
        </form>
    </motion.div>
  )
}

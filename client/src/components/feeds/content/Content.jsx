import React, { useEffect, useState } from 'react'
import "./content.scss"
import content from './contentData'; 
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from "axios"
import server from '../../../environment';


export default function Content() {

  const [event,setEvent] = useState([])
  
  useEffect(()=>{
    const fetchEvents = async ()=>{
      try {
        const response = await axios.get(`${server}/explore`)
       console.log(response);
       setEvent(response.data)
       console.log(event);
      } catch (err) {
        console.error(err)
      } 
    }
    fetchEvents()
  },[])

  const handleDelete = async (id)=>{
    try {
      console.log("id is =",id);
      await axios.delete(`${server}/explore/`+id)
      window.location.reload() //for reload this page
    } catch (err) {
      console.error(err)
    }
  }
  
  return (
    <div className='content'>
      <motion.h1 className='head-text' initial={{scale:0.5,opacity:0.5}} animate={{scale:1,opacity:1,transition:{duration:1.5}}}>ALL THE STORIES</motion.h1>

      <div className='story-box'>

        {content.map((box)=>(
          <motion.div className='box' key={box.id} initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1,transition:{type:"spring",stiffness:50}}}>
            <img src={box.img} alt="" />
            <div className='storyDetails'>
              <h3 className='title'>{box.title}</h3>
              <p className='storyLine'>{box.storyline}</p>
              <h5 className='author'>~ {box.author}</h5>
              <div className='buttons'>
                <motion.button className='update not-allowed' whileHover={{scale:1.1}} whileTap={{scale:0.9}}>
                Update
                </motion.button>
                <motion.button className='delate not-allowed' whileHover={{scale:1.1}} whileTap={{scale:0.9}}>Delate</motion.button>
              </div>
            </div>
          </motion.div>
        ))}
        
        {/*For CRUD  */}
        
        {event.length > 0 ? event.map((box)=>(
          <motion.div className='box' key={box.id} initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1,transition:{type:"spring",stiffness:50}}}>
            <img src={box.cover} alt="" />
            <div className='storyDetails'>
              <h3 className='title'>{box.title}</h3>
              <p className='storyLine'>{box.expression}</p>
              <h5 className='author'>~ {box.author}</h5>
              <div className='buttons'>
                <motion.button className='update' whileHover={{scale:1.1}} whileTap={{scale:0.9}}>
                <Link to={`/UpdateStories/${box.id}`} >Update</Link>
                </motion.button>
                <motion.button onClick={()=>handleDelete(box.id)} className='delate' whileHover={{scale:1.1}} whileTap={{scale:0.9}}>Delate</motion.button>
              </div>
            </div>
          </motion.div>
        )) : ""}


      </div>
      <h6 style={{color:'gray',width:'100%',height:'50px',background:'rgb(255,255,255,0.05)',display:'flex',alignItems:'center',justifyContent:'center'}}>Copyright @2024 Rakibul Islam</h6>
    </div>
  )
}



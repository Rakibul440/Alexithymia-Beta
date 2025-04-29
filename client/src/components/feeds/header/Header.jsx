import React,{useState} from 'react'
import "./header.scss"
import { motion} from "framer-motion"
import { Link } from 'react-router-dom'




const textVarient = {
    initial : {
        x : -300
    },
    whileInView : {
        x : 0,
        transition : {
            duration : 1
        }
    }
}
const shortTextVarient = {
    initial : {
        x : 300
    },
    whileInView : {
        x : 0,
        transition : {
            duration : 1
        }
    }
}
const slidVarients = {
    initial : {
        x : 0
    },
    animate : {
        x : "-50%",
        transition : {
            duration : 20,
           repeat : Infinity
        }
    }
}
export default function Header({text}) {
    const date = new Date()
    const localTime = date.toLocaleTimeString();
    let [time, setTime] = useState(localTime);
    const getLocalTime = ()=>{
      const newTime = new Date().toLocaleTimeString()
      setTime(newTime); 
    }
    setInterval(getLocalTime,1000) 


    

  return (
    <motion.div className='header' variants={textVarient} >
        <h4 >{time}</h4>
      <motion.h1 variants={textVarient} initial="initial" whileInView="whileInView" className='heading'>{text.heading}</motion.h1>
      <motion.p variants={shortTextVarient} initial="initial" animate="whileInView" className='short-text'>{text.firstPara}</motion.p>
      <motion.p variants={shortTextVarient} initial="initial" animate="whileInView"  className='short-text'>{text.secondPara}</motion.p>
      <motion.div className="slideText" variants={slidVarients} initial="initial" animate="animate" >
       {text.slideText}    
      </motion.div>
      <div className='btn'>
        <motion.button 
        initial={{scale:0.5,opacity : 0.5}} 
        whileInView={{scale:1,opacity:1}} 
        transition={{duration:1.5}} 
        whileHover={{background:" #1e1e28",transition : {duration : 0.3}}}
        whileTap={{scale:0.8,transition:{duration:0.2}}}
        >
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M360-120H200q-33 0-56.5-23.5T120-200v-280q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480v280q0 33-23.5 56.5T760-120H600v-320h160v-40q0-117-81.5-198.5T480-760q-117 0-198.5 81.5T200-480v40h160v320Zm-80-240h-80v160h80v-160Zm400 0v160h80v-160h-80Zm-400 0h-80 80Zm400 0h80-80Z"/></svg>
        </motion.button>
      </div>
      <div className='addBtn'>
        <motion.button 
        initial={{scale:0.5,opacity : 0.5}} 
        whileInView={{scale:1,opacity:1}} 
        transition={{duration:1.5}} 
        whileHover={{background:" #1e1e28",transition : {duration : 0.3}}}
        whileTap={{scale:0.8,transition:{duration:0.2}}}
        >
            <Link to={"/AddStories"} >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
            </Link>
            
        </motion.button>
      </div>
    </motion.div>
  )
}

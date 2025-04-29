import React from 'react'
import "./picture.scss"
import { motion } from 'framer-motion'


export default function Picture() {
  return (
    <div className='picture'>
      <div className='headingText'>
        <motion.h1 initial={{scale:0.5,opacity:0.5}} animate={{scale:1,opacity:1,transition:{duration:1.5}}}>STORY OF THE WEEK ??</motion.h1>
      </div>
      <div className='story-scene'>
            <motion.div className="img-card" initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1,transition:{type:"spring",stiffness:50}}}>
                <img src="./pic1.jpg" alt="" />
                <img src="./pic2.jpg" alt="" />
                <img src="./pic3.jpg" alt="" />
            </motion.div>
            <motion.div className="img-card" id='ex' initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1,transition:{type:"spring",stiffness:50}}}>
                <img src="./pic6.jpg" alt="" />
                <img src="./pic4.jpg" alt="" />
                <img src="./pic5.jpg" alt="" />
            </motion.div>
            <motion.div className="img-card" id='extra' initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1,transition:{type:"spring",stiffness:50}}}>
                <img src="./pic8.jpg" alt="" />
                <img src="./pic7.jpg" alt="" />
                <img src="./pic9.jpg" alt="" />
            </motion.div>
      </div>
    </div>
  )
}

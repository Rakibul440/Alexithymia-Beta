import React from 'react'
import "./story.scss"
import story from './story'

import {  motion } from 'framer-motion'

export default function Story() {
  return (
    <div className='story'>
      <motion.h1 className='story-name'
      initial={{y:-100}}
      animate={{y:0,transition:{duration:1.1}}}
      >{story.title}</motion.h1>
      <motion.div className="paragrapg" initial={{opacity:0.1}} animate={{opacity:1,transition:{duration:1.5}}} >
        <motion.p initial={{opacity:0.1,x:50}} animate={{opacity:1,x:0,transition:{duration:1.5}}}>{story.p1}</motion.p> <br />
        <motion.p initial={{opacity:0.1,x:50}} animate={{opacity:1,x:0,transition:{duration:1.5}}}>{story.p2}</motion.p> <br />
        <motion.p initial={{opacity:0.1,x:50}} animate={{opacity:1,x:0,transition:{duration:1.5}}}>{story.p3}</motion.p> <br />
        <motion.p initial={{opacity:0.1,x:50}} animate={{opacity:1,x:0,transition:{duration:1.5}}}>{story.p4}</motion.p> <br />
        <motion.p initial={{opacity:0.1,x:50}} animate={{opacity:1,x:0,transition:{duration:1.5}}}>{story.p4}</motion.p> <br />
        <motion.p initial={{opacity:0.1,x:50}} animate={{opacity:1,x:0,transition:{duration:1.5}}}>{story.p6}</motion.p> <br />
        <motion.p initial={{opacity:0.1,x:50}} animate={{opacity:1,x:0,transition:{duration:1.5}}}>{story.p7}</motion.p> <br />
        <motion.p initial={{opacity:0.1,x:50}} animate={{opacity:1,x:0,transition:{duration:1.5}}}>{story.p8}</motion.p> <br />
        <motion.p initial={{opacity:0.1,x:50}} animate={{opacity:1,x:0,transition:{duration:1.5}}}>{story.p9}</motion.p> <br />
        <motion.p initial={{opacity:0.1,x:50}} animate={{opacity:1,x:0,transition:{duration:1.5}}}>{story.p10}</motion.p> <br />
      </motion.div>
      <h4 className="author">~ {story.author}</h4>
    </div>
  )
}

import React from 'react'
import "./style.scss"
import { motion } from 'framer-motion'

const varients = {
  animate : {
    x: 0,
    opacity : 1,
    transition : {
      type : "spring",
      sifftness : 50
    }
  },
  initials : {
    x : -500,
    opacity : 0
  }
}

export default function AboutPage() {
  return (
    <div className='about-page'>
      <section>
        <motion.div className="about-app" id='app' variants={varients} initial="initials" animate="animate"  >
          <h1>ALEXITHYMIA</h1>
          <p>This is a Social Media!</p>
          <p>Where you can share your stories! You can also delete and modify your post.</p>
        </motion.div>
      </section>
      <section>
        <motion.div className="developer" id='dev' initial={{x:500,opacity:0}} animate={{opacity:1,x:0,transition:{type:"spring",stiffness:50}}} >
          <a href="https://www.linkedin.com/in/rakibul-islam-mondal-4350b8287">
            <img src="/rakibul.jpeg" alt="" />
          </a>
          <h4>~ Rakibul Islam</h4>
          <p>Web Developer</p>
        </motion.div>
      </section>
    </div>

    
  )
}

import React from 'react'
import "./style.scss"
import UpdateForm from './updateForm/UpdateForm'
import { motion } from 'framer-motion'

export default function UpdatePage() {
  return (
    <div className='udpate-Page'>
      <motion.h1 initial={{scale:0.5,opacity:0.5}} animate={{scale:1,opacity:1,transition:{duration:1.5}}}>UPDATE THIS STORIES</motion.h1>
      <UpdateForm add="UPDATE"/>
    </div>
  )
}

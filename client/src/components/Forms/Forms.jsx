import React,{useState,useEffect} from 'react'
import "./forms.scss"
import Form from './formPage/Form'
import { motion } from 'framer-motion'


export default function Forms() {
  const [text, setText] = useState('');
  const messages = ['FEELINGS', 'STORIES', 'EMOTIONS'];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setText(messages[currentIndex]);
      currentIndex = (currentIndex + 1) % messages.length;
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className='forms'>
      <motion.h1 initial={{scale:0.5,opacity:0.5}} animate={{scale:1,opacity:1,transition:{duration:1.5}}}>SHARE YOUR {text}!!</motion.h1>
      <Form add="SHARE" />
    </div>
  )
}

import React from 'react'
import "./sidebar.scss"
import { Link } from 'react-router-dom'
import navDetails, { contactData, resourceData } from './sidebarData'
import { motion} from "framer-motion"



export default function Sidebar() {
  return (
    <div className='sidebar'>

      <motion.div className='logo'>
        <motion.img src="./logo-image.png" alt="" initial={{scale:0.5}} animate={{scale:1}} transition={{type:"spring",stiffness:30}}/>
        <motion.div className="text" initial={{scale:0.5}} animate={{scale:1}} transition={{type:"spring",stiffness:30}}>
            <h3>Alexithymia</h3>
            <p>let's Express Feelings</p>
        </motion.div>
      </motion.div>

      <div className='line'></div>

      <motion.div className='navigation-items' >

        {navDetails.map((data)=>(
          <motion.div className="exploreItems"
           key={data.id}  
           whileHover={{scale:1.05,background : "#353935"}} 
           whileTap={{scale:0.9,background : "#353935"}}
      
           >

            <Link to={data.path}>
              
                <motion.span whileHover={{rotate:360}}>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                    <path d={data.d}/>
                  </svg>
                </motion.span>
                <span id={data.id}> 
                  {data.itemsName}
                </span>
              
            </Link>
          </motion.div>
        ))}

        <p>RESOURCE</p>
        <div className='line-sh'></div>

        {resourceData.map((data)=>(
          <motion.div className="resourceItems" key={data.id}
          whileHover={{scale:1.05,background : "#353935"}} 
          whileTap={{scale:0.9,background : "#353935"}}
           
          >
            <motion.a href={data.path}>
              <motion.span whileHover={{rotate:360}}>
                <svg xmlns="http://www.w3.org/2000/svg" height="23px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                  <path d={data.d}/>
                </svg>
              </motion.span>
              <span id={data.id}> 
                {data.itemsName}
              </span>
            </motion.a>
          </motion.div>
        ))}

        <p>CONTACT</p>
        <div className='line-sh'></div>
        
        {contactData.map((data)=>(
          <motion.div className="contactItems" key={data.id}
          whileHover={{scale:1.05,background : "#353935"}} 
          whileTap={{scale:0.9,background : "#353935"}}
           
          >
            <a href={data.path}>
              <motion.span  whileHover={{rotate:360}}>
                <svg xmlns="http://www.w3.org/2000/svg"  height="24px"  viewBox="0 0 448 512">
                  <path d={data.d}/>
                </svg>
              </motion.span>
              <span id={data.id}> 
                {data.itemsName}
              </span>
            </a>
          </motion.div>
        ))}

      </motion.div>
    </div>
  )
}


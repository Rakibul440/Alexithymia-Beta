import React from 'react'
import "./style.scss"
import Picture from './photo/Picture'
import Story from './Story/Story.jsx'
export default function BestStory() {
  return (
    <div className='best-story'>
      <section>
        <Picture />
      </section>
      <section>
        <Story />
      </section>
      <section>
        <h6 style={{color:'gray',width:'100%',height:'50px',background:'rgb(255,255,255,0.05)',display:'flex',alignItems:'center',justifyContent:'center'}}>Copyright @2024 Rakibul Islam</h6>
      </section>

    </div>
  )
}

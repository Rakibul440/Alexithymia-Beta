import React from 'react'
import "./feeds.scss"
import Header from './header/Header'
import Content from './content/Content'
export default function Feeds() {

  const alltext = {
    heading : "ALEXITHYMIA",
    firstPara : "Don't suffer with Emotional Blindness",
    secondPara : "Express Yor Feelings!",
    slideText : "Express Yor Feelings!"
  }

  return (
    <div className='feeds'>
      <section>
        <Header 
          text = {alltext}
        />
      </section>
      
      <section >
        <Content />
      </section>
      
    </div>
  )
}

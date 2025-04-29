import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import BestStory from '../components/bestStory/BestStory'

export default function BestStories() {
  return (
    <div className='bestStories'>
      <section>
        <Sidebar />
      </section>
      <section>
        <BestStory />
      </section>
    </div>
  )
}

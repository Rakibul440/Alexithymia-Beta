import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Feeds from '../components/feeds/Feeds'


export default function Explore() {
  return (
    <div className='explore'>
      <section>
        <Sidebar />
      </section>
      <section>
        <Feeds />
      </section>
      
    </div>
  )
}

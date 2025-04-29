import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Forms from '../components/Forms/Forms'

export default function AddStories() {
  return (
    <div className='addStories'>
      <section>
        <Sidebar />
      </section>
      <section>
        <Forms />
      </section>
    </div>
  )
}

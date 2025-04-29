import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import UpdatePage from '../components/update/UpdatePage'

export default function UpdateStories() {
  return (
    <div className='updateStories'>
      <section>
        <Sidebar />
      </section>
      <section>
        <UpdatePage />
      </section>
    </div>
  )
}

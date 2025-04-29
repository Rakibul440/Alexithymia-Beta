import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import AboutPage from '../components/about/AboutPage'

export default function About() {
  return (
    <div className='about'>
      <section>
        <Sidebar />
      </section>
      <section>
        <AboutPage />
      </section>
    </div>
  )
}

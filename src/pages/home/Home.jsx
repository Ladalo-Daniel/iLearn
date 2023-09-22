import React from 'react'
import "./home.css"
import Mycourses from './homecomponents/mycourses/Mycourses'
import Allcourses from './homecomponents/allcourses/Allcourses'

export default function Home() {
  return (
    <section className='homeWrapper'>
      <Mycourses />
      <Allcourses />
    </section>
  )
}

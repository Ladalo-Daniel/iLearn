import React from 'react'
import "./mycourses.css"
import python from "../../../../../src/img/python.jpg"
import reactjs from "../../../../../src/img/reactjs.png"
import nodejs from "../../../../../src/img/nodejs.png"
import html from "../../../../../src/img/html.png"

export default function Mycourses() {
  return (
    <section className='home'>
      <div className='courses-card'>
      <img src={python}></img>
      <h3>Python</h3>
      </div>

      <div className='courses-card'>
      <img src={reactjs}></img>
      <h3>React js</h3>
      </div>

      <div className='courses-card'>
      <img src={html}></img>
      <h3>HTML</h3>
      </div>

      <div className='courses-card'>
      <img src={nodejs}></img>
      <h3>Node js</h3>
      </div>
    </section>
  )
}

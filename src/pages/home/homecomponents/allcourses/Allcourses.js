import React from 'react'
import "./allcourses.css"
import python from "../../../../../src/img/python.jpg"
import reactjs from "../../../../../src/img/reactjs.png"
import html from "../../../../../src/img/html.png"
import nodejs from "../../../../../src/img/nodejs.png"

export default function Allcourses() {
  return (
    <section className='allCoursesWrapper'>
      <div className='allcoursesCard'>
        <img className='img' src={python}></img>
        <div>
            <h3>Python</h3>
            <p>Python is a popular, easy-to-learn, and very powerful programming language, which is used in software and web development, data science, machine learning, and many other fields. In this course, well cover the basic concepts of Python, as well as build real-life projects and solve different coding challenges. Introduction to Python requires no prior programming experience, so lets dive right in!</p>
        </div>
      </div>
      <div className='allcoursesCard'>
        <img className='img' src={reactjs}></img>
        <div>
            <h3>React js</h3>
            <p>Have you already mastered the basics of JavaScript, and want to expand your knowledge? Then youre in the right place. This course will teach you how to make more complex and flexible programs as well as even more interactive websites. This course follows our Introduction to Javascript course. We recommend you take a quick look at whats covered there before you start this course.</p>
        </div>
      </div>
      <div className='allcoursesCard'>
        <img className='img' src={html}></img>
        <div>
            <h3>HTML</h3>
            <p>HTML is at the core of every web page. Its beginner-friendly and knowing the basics is useful for everyone who works in digital design, marketing, content and more. If youre interested in front-end web development, this course is a great place to start! You dont need any previous coding experience, and we have plenty of other courses for you to deepen your knowledge once youre finished, including CSS and JavaScript.</p>
        </div>
      </div>
      <div className='allcoursesCard'>
        <img className='img' src={nodejs}></img>
        <div>
            <h3>Node js</h3>
            <p>Python is a popular, easy-to-learn, and very powerful programming language, which is used in software and web development, data science, machine learning, and many other fields. In this course, well cover the basic concepts of Python, as well as build real-life projects and solve different coding challenges. Introduction to Python requires no prior programming experience, so lets dive right in!</p>
        </div>
      </div>
      <div className='allcoursesCard'>
        <img className='img' src={python}></img>
        <div>
            <h3>Python</h3>
            <p>Python is a popular, easy-to-learn, and very powerful programming language, which is used in software and web development, data science, machine learning, and many other fields. In this course, well cover the basic concepts of Python, as well as build real-life projects and solve different coding challenges. Introduction to Python requires no prior programming experience, so lets dive right in!</p>
        </div>
      </div>
      <div className='allcoursesCard'>
        <img className='img' src={python}></img>
        <div>
            <h3>Python</h3>
            <p>Python is a popular, easy-to-learn, and very powerful programming language, which is used in software and web development, data science, machine learning, and many other fields. In this course, well cover the basic concepts of Python, as well as build real-life projects and solve different coding challenges. Introduction to Python requires no prior programming experience, so lets dive right in!</p>
        </div>
      </div>
      <div className='allcoursesCard'>
        <img className='img' src={python}></img>
        <div>
            <h3>Python</h3>
            <p>Python is a popular, easy-to-learn, and very powerful programming language, which is used in software and web development, data science, machine learning, and many other fields. In this course, well cover the basic concepts of Python, as well as build real-life projects and solve different coding challenges. Introduction to Python requires no prior programming experience, so lets dive right in!</p>
        </div>
      </div>
    </section>
  )
}

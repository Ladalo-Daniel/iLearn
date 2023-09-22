import React from 'react'
import QuizNavbar from '../quiznavbar/QuizNavbar'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'

export default function Layout() {
  return (
    <>
      <QuizNavbar />
      <main>
      <Outlet />
      </main>
      <Footer />
    </>
  )
}

import React from 'react'
import Contact from './Components/Contact'
import About from './Components/About'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Testimonials from './Components/Testimonials'

export default function App() {
  return (
    <div className='h-screen w-full text-white'>
      <Navbar/>
      <About/>
      <Contact/>
      <Hero/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

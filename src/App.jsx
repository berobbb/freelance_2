import React from 'react'
import Contact from './Components/Contact'
import About from './Components/About'
import Footer from './Components/Footer'

export default function App() {
  return (
    <div className='h-screen w-full bg-black text-white'>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

import React from 'react'
import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'

function App() {
  return (
    <div className='w-screen'>
      <div className="h-screen text-white">
        <Header />
        <Hero />
      </div>
      <Menu />
    </div>
  )
}

export default App

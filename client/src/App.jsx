import React from 'react'
import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <div className='w-screen'>
      <div className="h-screen">
        <Header />
        <Hero />
      </div>
    </div>
  )
}

export default App

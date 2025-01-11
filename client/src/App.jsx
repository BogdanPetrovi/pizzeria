import React from 'react'
import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import { CartContextProvider } from './context/Cart'

function App() {
  return (
    <div className='w-screen'>
      <CartContextProvider >
        <div className="h-screen text-white">
          <Header />
          <Hero />
        </div>
        <Menu />
      </CartContextProvider>
    </div>
  )
}

export default App

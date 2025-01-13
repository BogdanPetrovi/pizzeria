import React from 'react'
import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import { CartContextProvider } from './context/CartContext'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'

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
      <AboutUs />
      <Footer />
    </div>
  )
}

export default App

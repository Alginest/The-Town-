import React from 'react'
import './index.css'
// components
import Navbar from './components/Navbar'
import Intruduction from './components/Intruduction'
import OurWork from './components/OurWork'
import Module from './components/Module'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <Navbar />
      <Intruduction />
      <OurWork />
      <Module />
      <Footer />
    </>
  )
}

export default App

import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Status } from './components/Status'

function App() {

  return (
    <div className="App">
     
      <Navbar />
      <Status></Status>
    </div>
  )
}

export default App
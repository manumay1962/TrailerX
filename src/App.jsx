import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <div className='w-screen bg-[#1F1E24] flex h-screen'>

      <Routes>
    <Route  path='/' element={<Home />}/>

      </Routes>
    </div>
  )
}

export default App 
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/Navbar'
import Movies from './components/Movies'



const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/movies' element={<Movies/>}/>
     
    </Routes>
    </BrowserRouter>
    
  )
}

export default App

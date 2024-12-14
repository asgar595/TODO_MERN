import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Todo from './Components/Todo/Todo'

const App = () => {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/todo" element={<Todo />} />

        
      </Routes>
    </BrowserRouter>
    
    
      
      
    </div>
  )
}

export default App

import { useState } from 'react'
import Index from './pages/index'
import NovaRota from './pages/novaRota'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Index />}/>
          <Route path="/Teste" element={<NovaRota />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App

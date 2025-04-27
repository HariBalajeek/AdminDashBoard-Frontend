import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FindJobs from './pages/FindJobs'
import FindTalents from './pages/FindTalents'
import Testimonials from './pages/Testimonials'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import {Toaster} from 'react-hot-toast'

const App = () => {
  return (
    <div>
      <Toaster/>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/findjobs" element={<FindJobs />} />
        <Route path="/findtalents" element={<FindTalents />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </div>
  )
}

export default App
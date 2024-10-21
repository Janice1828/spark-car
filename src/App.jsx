import { useState } from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './Pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contactus from './Pages/Contactus'
import About from './Pages/About'
import Corporaterent from './Pages/Corporaterent'
import Hiredriver from './Pages/Hiredriver'
import Blog from './Pages/Blog'
import Blogdetails from './components/blog/Blogdetails'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/contactus' Component={Contactus} />
        <Route path='/corporaterent' Component={Corporaterent} />
        <Route path='/hiredriver' Component={Hiredriver} />
        <Route path='/blog' Component={Blog} />
        <Route path='/blog-details' Component={Blogdetails} />
      </Routes>
    </>
  )
}

export default App

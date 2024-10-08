import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './Pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import ContainerFluidBreakpointExample from './Pages/ContainerFluidBreakpointExample'
import Contactus from './Pages/Contactus'
import About from './Pages/About'
import Corporaterent from './Pages/Corporaterent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/contactus' Component={Contactus} />
        <Route path='/corporaterent' Component={Corporaterent} />
      </Routes>
    </>
  )
}

export default App

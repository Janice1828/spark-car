import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './Pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import ContainerFluidBreakpointExample from './Pages/ContainerFluidBreakpointExample'
import Contactus from './Pages/Contactus'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/contactus' Component={Contactus} />
      </Routes>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './Pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import ContainerFluidBreakpointExample from './Pages/ContainerFluidBreakpointExample'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/test' Component={ContainerFluidBreakpointExample} />
      </Routes>
    </>
  )
}

export default App

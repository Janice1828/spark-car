import React from 'react'
import Pagesnav from '../components/nav/Pagesnav'
import Contactnav from '../components/nav/Contactsnav'
const Home = () => {
    
    return (
        <div className="container-fluid gx-0">
            <div>
                <Contactnav />
                <Pagesnav />
            </div>
        </div>
    )
}

export default Home
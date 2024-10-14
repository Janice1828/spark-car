import React from 'react'
import Questions from '../components/contactus/Questions'
import Branches from '../components/contactus/Branches'
import Map from '../components/contactus/Map'
import Footer from '../components/nav/Footer'
import Contactsnav from '../components/nav/Contactsnav'
import Pagesnav from '../components/nav/Pagesnav'

const Contactus = () => {
    const branchesList = [
        {
            placeName: "Nepalgunj",
            phone: 9802315720,
            email: "info.npj@sparkcar.org"
        },
        {
            placeName: "Chitwan",
            phone: 9801101903,
            email: "info.ctw@sparkcar.org"
        },
        {
            placeName: "Pokhara",
            phone: 9801101911,
            email: "info.pok@sparkcar.org"
        },
        {
            placeName: "Biratnagar",
            phone: 9801128218,
            email: "info.brt@sparkcar.org"
        },
        {
            placeName: "Bhairahawa",
            phone: 9801101921,
            email: "info.bwa@sparkcar.org"
        },
        {
            placeName: "Birgunj",
            phone: 9801101907,
            email: "info.brj@sparkcar.org"
        },
    ]
    return (
        <div className='contactus-container'>
            <Contactsnav />
            <div className="contact-us-img">
                <div className='px-md-6'>
                    <Pagesnav />
                </div>
            </div>
            <div className="px-md-6">
                <Questions />
                <Branches branches={branchesList} />
                <Map />
            </div>
            <div className="px-md-6 bg-opacity-100" style={{ background: "#000" }}>
                <Footer />
            </div>
        </div>
    )
}

export default Contactus
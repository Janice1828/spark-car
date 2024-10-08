import React from 'react'
import Pagesnav from '../components/nav/Pagesnav'
import Contactsnav from '../components/nav/Contactsnav'
import Details from '../components/aboutus/Details'
import Quality from '../components/aboutus/Quality'
import Testimonials from '../components/aboutus/Testimonials'
import Footer from '../components/nav/Footer'
import Rajesh from "../assets/Images/rajesh-hamal.jpeg"
import Anil from "../assets/Images/anil.jpeg"
import Akash from "../assets/Images/akash-golcha.jpeg"
import Rishi from "../assets/Images/rishi-dhamal.jpeg"

const About = () => {
    const benefits = [
        {
            icon: "fa-solid fa-trophy",
            title: "20+ Years of Providing Luxury Car Services in Nepal",
            content: "For over two decades, we've provided supreme experiences in luxury car services, bringing safety and comfort to every drive in Nepal."

        },
        {
            icon: "fa-solid fa-road",
            title: "Services Available in 50+ Major Cities of Nepal",
            content: "Spark Car is at your service for your extraordinary adventures in major cities across Nepal. Wherever your journey leads, we're here for you."
        },

        {
            icon: "fa-solid fa-tag",
            title: "Safe Rides Anyday, Everyday (24/7 365 days)",
            content: "We are never off duty. Safe and reliable journeys, every day, all year round just for you."
        },
        {
            icon: "fa-solid fa-map-pin",
            title: "Range of Options - Economical Hiring to Posh Premium Cars",
            content: "Choose your favorite car from our versatile vehicle fleet that caters to every need, no matter your style or budget."
        },

    ]
    const testimonials = [
        {
            img: Rajesh,
            name: "Rajesh Hamal",
            profession: "Megastar/Actor",
            review: "I usually travel with Spark Car rental .I recommend you to use their best quality service.Thank You Spark Car"
        },
        {
            img: Anil,
            name: "Anil Keshary Shah",
            profession: "Banker Celebrity",
            review: "I always choose Spark Car when it comes to my premium vehicle needs on any occasion or the places I like to travel. They are the best."
        },
        {
            img: Akash,
            name: "Akash Golcha",
            profession: "Director - Golchha Organization",
            review: "I want to recommend Spark Car to everyone who wants to rent vehicles in Nepal. It's a unique service Spark Car has brought here in Nepal."
        },
        {
            img: Rishi,
            name: "Rishi Dhamala",
            profession: "Journalist",
            review: "If anybody needs a reliable, safe, and premium car rental service in Nepal. I solely recommend Spark Car."
        },
    ]
    return (
        <div className='about-us-container'>
            <Contactsnav />
            <div className='about-us-img'>
                <div className="px-md-6">
                    <Pagesnav />
                </div>
            </div>
            <div className="px-md-6">
                <Details benefitsList={benefits} />
            </div>
            <div className='px-md-6 py-5' style={{ background: "#f6f6f6" }}>
                <Quality />
            </div>
            <div className="px-md-6" style={{ background: "aliceblue" }}>
                <Testimonials testimonialsList={testimonials} />
            </div>
            <div className="px-md-6 bg-opacity-100" style={{ background: "#000" }}>
                <Footer />
            </div>
        </div>
    )
}

export default About
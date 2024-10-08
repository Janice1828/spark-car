import React from 'react'
import Services from '../components/hiredriver/Services'
import Driverhiringsteps from '../components/hiredriver/Driverhiringsteps'
import Benefits from '../components/hiredriver/Benefits'
import Pagesnav from '../components/nav/Pagesnav'
import Contactsnav from '../components/nav/Contactsnav'
import Footer from '../components/nav/Footer'
const Hiredriver = () => {
  const servicesList = ["Premium Driver Hire Services for individuals and businesses in Nepal seeking drivers on an hourly, daily, or monthly basis.", "Spark Driver proudly introduces its Professional Driver Hire Services, providing a seamless blend of convenience, safety, and expertise for your travels across Nepal.", "Conveniently hire a driver in Nepal via phone or mobile app for various purposes, including outstation trips, one-way drops, round trips, and more.", "Our driver hire services extend to special events such as weddings and corporate functions, offering skilled drivers capable of handling diverse car models."]
  const driverHiringStepsList = [
    {
      title: "Download the App/Call",
      content: "The user provides details on pick-up and drop-off date and time, vehicle type and model, location, and billing information for driver hire in Nepal."
    },
    {
      title: "Driver Booking Gets Confirmed ",
      content: "Spark Car confirms booking, assigns a suitable driver, and updates users with real-time driver status notifications."
    },
    {
      title: "Spark Driver Arrives at Pick-up Point ",
      content: "The Spark Driver reaches the pick-up point, introduces himself to the customer, and then embarks on the journey."
    },
  ]
  const benefitsLists = [
    {
      icon: "fa-solid fa-car",
      title: "Personalized 24/7 Driver Hire",
      content: " Spark Driver offers a personalized experience tailored to your preferences. "
    },
    {
      icon: "fa-solid fa-user",
      title: "Safety First",
      content: "Your safety is our top priority. Our drivers are trained even for emergency response protocols. "
    },
    {
      icon: "fa-solid fa-tag",
      title: "Transparent-Fixed Price",
      content: "Streamline your driver hire with our transparent pricing with no hidden costs for a seamless experience."
    },
    {
      icon: "fa-solid fa-users",
      title: "Expertise Service",
      content: "Our drivers are more than just chauffeurs; they are seasoned navigators familiar with the intricacies of Nepal's roads. "
    },
    {
      icon: "fa-regular fa-clock",
      title: "Punctuality and Reliability",
      content: "Always on time! Spark Driver Rental Services guarantees punctuality and reliability."
    },
    {
      icon: "fa-solid fa-book-open-reader",
      title: "Easy Booking",
      content: "Experience the convenience of our Professional Driver Hire Services by simply contacting us via call or downloading the app."
    },
  ]
  return (
    <div className='hire-driver-container'>
      <Contactsnav />
      <div className="hire-driver-img">
        <div className="px-md-6">
          <Pagesnav />
          <div className='text-center mt-5'>
            <button style={{ background: "#0CAA4B" }} className='pt-3 px-4 pb-2 text-light outline-0 border-0'>
              <h4 className='fw-600'>HIRE A DRIVER</h4>
            </button>
          </div>
        </div>
      </div>
      <div className="px-md-6">
        <h2 className='text-center fw-bold hire-driver-green-color mt-3 mb-4'>Hire a Driver in Nepal
        </h2>
        <Services data={servicesList} />
        <Driverhiringsteps data={driverHiringStepsList} />
        <Benefits data={benefitsLists} />
      </div>
      <div className="px-md-6 bg-opacity-100" style={{ background: "#000" }}>
        <Footer />
      </div>
    </div>
  )
}
export default Hiredriver
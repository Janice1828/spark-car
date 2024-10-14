import { img } from 'framer-motion/client'
import React from 'react'
import valueOne from "../assets/Images/value-1.jpeg";
import valueTwo from "../assets/Images/value-2.jpeg";
import valueThree from "../assets/Images/value-3.jpeg";
import stepOne from "../assets/Images/step-1.png";
import stepTwo from "../assets/Images/step-2.png";
import stepThree from "../assets/Images/step-3.png";
import stepFour from "../assets/Images/step-4.png";
import Whysparkcar from '../components/corporaterent/Whysparkcar';
import Howitworks from '../components/corporaterent/Howitworks';
import Pagesnav from '../components/nav/Pagesnav';
import Footer from '../components/nav/Footer';
const Corporaterent = () => {
  const valuePropositions = [
    {
      img: valueOne,
      title: "Well maintained Vehicles",
      content: "Experience corporate car rentals with perfectly maintained vehicles for seamless and punctual travel."
    },
    {
      img: valueTwo,
      title: "Flexible Fleet Rental Duration",
      content: "Our fleet rental service offers flexibility on an hourly, daily, monthly, and annual basis to cater to your diverse corporate needs."
    },
    {
      img: valueThree,
      title: "Access to a diverse and extensive fleet",
      content: "Gain access to a wide-ranging and extensive fleet of vehicles spanning the entire country."
    }
  ]
  const corporateClientBecomingSteps = [
    {
      title: "Form Submission",
      content: "Complete the corporate client form to facilitate the rental process for corporate use of Spark Cars.",
      img: stepOne
    },
    {
      title: "Corporate Client Registration & Confirmation",
      content: "Upon form submission, our operations department will promptly reach out to you to ensure necessary documents for the corporate client registration and confirmation.",
      img: stepTwo
    }, {
      title: "Contractual Agreement",
      content: "Formalize the rental arrangement with a comprehensive contractual agreement to ensure clarity and mutual understanding.",
      img: stepThree
    },
    {
      title: "Service Delivery",
      content: "Experience efficient and reliable service delivery from Spark Cars for all your corporate transportation needs.",
      img: stepFour
    },
  ]
  return (
    <div className='corporate-rent-container '>
      <div className="corporate-rent-img">
        <div className="px-md-6">
          <Pagesnav />
          <div className='text-center mt-5'>
            <button style={{ background: "#0CAA4B" }} className=' be-partner px-5 pt-3 pb-2  text-light rounded-0 outilne-0 border-0'>
              <h4 className='fw-600'>BE A PARTNER</h4>
            </button>
          </div>
        </div>
      </div>
      <div className="px-md-6">
        <Whysparkcar data={valuePropositions} />
        <Howitworks data={corporateClientBecomingSteps} />
      </div>
      <div className="px-md-6 bg-opacity-100" style={{ background: "#000" }}>
        <Footer />
      </div>
    </div>
  )
}

export default Corporaterent
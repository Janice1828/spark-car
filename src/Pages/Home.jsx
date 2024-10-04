import React from 'react'
import Pagesnav from '../components/nav/Pagesnav'
import Contactsnav from '../components/nav/Contactsnav'
import Service from '../components/home/Service'
import Whysparkcar from "../components/home/Whysparkcar";
import Records from '../components/home/Records';
import Tourpackage from "../components/home/Tourpackage";
import Adventure from "../components/home/Adventure";
import Explore from '../components/home/Explore';
import Latestblog from "../components/home/Latestblog"
import Packages from '../components/home/Packages';
import Questions from "../components/home/Questions"
import Rentalavailableplace from "../components/home/Rentalavailableplace"
import FurtherInformation from "../components/home/FurtherInformation"
import Footer from '../components/nav/Footer';
import navLogo from "../assets/Images/spark-car-nav-logo-1.png"

const Home = () => {
    const contacts = [
        {
            icon: "fa-solid fa-phone",
            value: "01-5971616"
        },
        {
            icon: "fa-solid fa-envelope",
            value: "info@sparkcar.org"
        }
    ];
    const contactNo = contacts[0].value;
    const socialMediaLinks = ["fa-brands fa-facebook", "fa-brands fa-twitter", "fa-brands fa-youtube", "fa-brands fa-linkedin"]
    const navLinks = ["Home", "Hire a Driver", "Corporate Rent", "Blog", "About", "Contact us"]
    const services = [{
        title: "Choose Your Favorite Vehicle",
        content: "Select your preferred vehicle, tailored to your journey as per your requirement."
    },
    {
        title: "Make a Booking",
        content: "You can make easy bookings through our user-friendly app or a simple phone call."
    },
    {
        title: "Pick-Up Location & Date",
        content: "Select your nearest location with the date and time for your journey."

    }
        ,
    {
        title: "Sit Back & Relax",
        content: "Sit back, relax, and let your safe and convenient journey begin with Spark Car. "
    }
    ]
    const benefits = [
        {
            icon: " ",
            title: "24-hour Customer Service",
            content: "We promise impeccable service by promptly addressing your queries and problems through our dedicated 24/7 customer support team."

        },
        {
            icon: "",
            title: "ISO Certification",
            content: "We are an ISO 9001, ISO 14001 and ISO 45001 certified car rental company with 20+ years of service excellence in Nepal"
        },

        {
            icon: "",
            title: "Own Dedicated Workshop",
            content: "We ensure impeccable fleet management, with regular inspections for optimal vehicle performance and customer satisfaction."
        },
        {
            icon: "",
            title: "All Over Nepal Service",
            content: "Our service spans all 7 provinces and 77 districts, ensuring accessibility for your transportation needs nationwide."
        },

    ]
    const recordList = [
        {
            count: 5000,
            title: "No of Vehicles"
        },
        {
            count: "2 Lakh +",
            title: "Customers Served Annually"
        },
        {
            count: 5000,
            title: "No of Drivers"
        },
        {
            count: 30,
            title: "Years of Experience"
        }
    ]
    const tourPackages = [
        {
            img: "",
            placeName: "Pokhara",
            cost: 17000,
            time: "4D"
        },
        {
            img: "",
            placeName: "Mustang",
            cost: 17000,
            time: "8D"
        },
        {
            img: "",
            placeName: "Lumbini",
            cost: 20000,
            time: "7D"
        },
        {
            img: "",
            placeName: "Ilam",
            cost: 15000,
            time: "4D"
        },
    ]
    const adventureServicesList = [
        {
            icon: "",
            title: "First Class Services",
            content: "Where luxury meets exceptional care, creating unforgettable moments and exceeding your every expectation."
        },
        {
            icon: "",
            title: "24/7 Customer Service",
            content: "Reliable support when you need it most, keeping you on the move with confidence and peace of mind."

        },
        {
            icon: "",
            title: "Pick-Up & Drop-Off",
            content: "Enjoy pickup and drop-off services, adding an extra layer of ease to your car rental experience."
        }
    ]
    const exploringPackages = [
        {
            img: "",
            title: "Domestic Tour Cars",
            cost: 2000,
            packageTitle: "Pick and drop inside ringroad",
            passengerNumber: 4
        },
        {
            img: "",
            title: "Vip Delegates Car",
            cost: 5000,
            packageTitle: "Vip delegates car service",
            passengerNumber: 4
        },
        {
            img: "",
            title: "Pick and drop inside ringroad by car",
            cost: 3000,
            packageTitle: "Pick and drop inside ringroad",
            passengerNumber: 2
        },
        {
            img: "",
            title: "Airport Pickup and dropoff service",
            cost: 1700,
            packageTitle: "Airport pickup and dropofff service",
            passengerNumber: 3
        },
    ]
    const blogList = [{
        img: "",
        postedDate: "16 Sep",
        title: "Dashain Travels Made Easy with Spark Car Rental: Pre-Booking Now Open!",
        content: "This year, Spark Car Rental is here to make your Dashain travels easier than ever, offering pre-booking services to help you secure the pe.."
    },
    {
        img: "",
        postedDate: "25 Aug",
        title: "Hiace Van Rental in Kathmandu, Nepal",
        content: "Hiace van rental in Kathmandu, Nepal is best when you are traveling in a group, renting a Hiace in Kathmandu can be the perfect solution."
    },
    {
        img: "",
        postedDate: "12 Aug",
        title: "Why Customers Love Renting from Spark Car: Nepal’s Leading Vehicle Rental",
        content: "As Nepal's first ISO-certified vehicle rental company, Spark Car has set the benchmark for quality, reliability, and customer satisfaction.."
    }
    ]
    const packagesList = [""];
    const questionAnser = [{
        question: "What is the rental car price in Nepal?",
        answer: "You can hire a vehicle in Kathmandu for half a day and a full day at the starting price of Rs. 4000 and Rs. 6000 respectively."
    },
    {
        question: "Does the car come with a driver?",
        answer: "Yes, the car comes with a driver."
    },
    {
        question: "What is the price of one-day car rental in Kathmandu, Nepal?",
        answer: "You can rent a car in Kathmandu, Nepal from the starting price of Rs.1000 for pickup and drop services."
    }, {
        question: "Can you rent a car from anywhere in Nepal?",
        answer: "Yes, you can rent a car anywhere and anytime all over Nepal."
    }
        , {
        question: "How can you rent a car in Kathmandu Nepal?",
        answer: "You can rent a vehicle in Kathmandu, Nepal at Spark Car via call at 01-5971616 / 9801101924 or the Spark Car app."

    },
    {
        question: "Can you rent a car in Nepal without a driver as a self-drive rental?",
        answer: "Yes, you can rent a car in Nepal without a driver for self-drive purposes via Spark Car."
    }
        , {
        question: "What happens in case of a vehicle breakdown?",
        answer: "In case of vehicle breakdown or any unforeseen circumstances, we provide instant replacement to ensure a smooth journey for the customers."
    }, {
        question: "How do I extend the rental period in vehicle rental services in Nepal?",
        answer: "You can extend the car rental period by calling our 24/7 customer support at 01-5971616 / 9801101924 through virtual communication between the parties."
    }
    ]
    const placesList = [
        {
            title: "Rent a Car in Kathmandu",
            isAvailable: "Yes",
        }
        , {
            title: "Rent a Car in Lalitpur",
            isAvailable: "No"
        }
        ,
        {
            title: "Rent a Car in Bhaktapur",
            isAvailable: "No"
        },
        {
            title: "Rent a Car in Pokhara",
            isAvailable: "Yes"
        },
        {
            title: "Rent a Car in Chitwan",
            isAvailable: "Yes"
        },
        {
            title: "Rent a Car in Dang",
            isAvailable: "No"
        },
        {
            title: "Rent a Car in Dhangadh",
            isAvailable: "No"
        },
        {
            title: "Rent a Car in Itahari",
            isAvailable: "No"
        },
        {
            title: "Rent a Car in Ilam",
            isAvailable: "No"
        },
        {
            title: "Rent a Car in Hetauda",
            isAvailable: "Yes"
        },
        {
            title: "Rent a Car in Nepalgunj",
            isAvailable: "Yes"
        },
        {
            title: "Rent a Car in Gorkha",
            isAvailable: "Yes"
        },
        {
            title: "Rent a Car in Bharatpur",
            isAvailable: "No"
        },
        {
            title: "Rent a Car in Biratnagar",
            isAvailable: "Yes"
        },
        {
            title: "Rent a Car in Birgunj",
            isAvailable: "Yes"
        },
        {
            title: "Rent a Car in Lumbini",
            isAvailable: "Yes"
        },
        {
            title: "Rent a Car in Dharan",
            isAvailable: "Yes"
        },
        {
            title: "Rent a Car in Butwal",
            isAvailable: "Yes"
        },
    ]
    return (
        <div className="container-fluid gx-0">
            <div>
                <Contactsnav contacts={contacts} links={socialMediaLinks} />
                <Pagesnav linksList={navLinks} logo={navLogo} />
                <Service servicesList={services} />
                <Whysparkcar benefitsList={benefits} />
                <Records records={recordList} />
                <Tourpackage packages={tourPackages} />
                <Adventure adventureServices={adventureServicesList} />
                <Explore packages={exploringPackages} />
                <Latestblog blogs={blogList} />
                <Packages packages={packagesList} />
                <Questions questions={questionAnser} />
                <Rentalavailableplace places={placesList} />
                <FurtherInformation number={contactNo} />
                <Footer />

            </div>
        </div>
    )
}

export default Home
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Modal from '../global/Modal';
const Tourpackage = ({ packages }) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const buyButtons = [{
        title: "BOOK",
        bgColor: "tour-package-btn-bg-blue"
        , close: false
    },
    {
        title: "CLOSE",
        bgColor: "bg-danger btn-box-shadow"
        , close: true
    }]
    const buyFullWForms = [{
        labelName: "Pick Up Location inside Kathmandu",
        placeHolder: "From Location"
    }
    ]
    const buyHalfWForms = [
        {
            labelName: "Pick Up Date",
        },
        {
            labelName: "Drop Date",
        },
    ]
    return (
        <div className='mt-sm-4 mt-5 mb-5 pb-3 pb-sm-0'>
            <h2 className='home-headings'>Tour Packages</h2>
            <p className='text-center mb-4'>
                Where your journey begins with an exquisite fleet of vehicles for an unforgettable experience.
            </p>
            <Carousel responsive={responsive} infinite={true} autoPlay={true}
            >
                {packages.map((item, key) => (
                    <div className="card" key={key} style={{ boxShadow: "3px 3px 9px rgba(164, 164, 186, 0.2)" }}>
                        <div className="card-content px-2 py-2">
                            <div style={{ height: "250px" }}>
                                <img src={item.img} alt="" className='w-100 h-100 rounded-2' />
                            </div>
                            <div className='d-flex justify-content-between px-3 py-3'>
                                <div>
                                    <h5 className='fw-600' style={{ color: "rgb(25,158,28)" }}>{item.placeName}</h5>
                                    <h4 className='fw-bold'>NPR {item.cost}</h4>
                                </div>
                                <div>
                                    <p className='fs-14 fw-500 text-end d-flex gap-1 align-items-center'><i className="fa-regular fa-clock text-primary fw-500"></i>{item.time}</p>
                                    <button className="btn btn-sm btn-bg-color text-light fw-600 px-3 py-1" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                }
            </Carousel >
            <div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <Modal headerTitle="Change Location and Time" footerBtns={buyButtons} fullWForms={buyFullWForms} halfWForms={buyHalfWForms} />
                </div>
            </div>
        </div >
    )
}
export default Tourpackage
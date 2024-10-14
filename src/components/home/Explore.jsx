import React from 'react'
import CarIcon from "../../assets/Icons/car.svg"
import PersonIcon from "../../assets/Icons/1.svg";
import Two from "../../assets/Icons/2.svg";
import WindowIcon from "../../assets/Icons/3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Modal from '../global/Modal';
const Explore = ({ packages }) => {
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
    const exploreButtons = [{
        title: "Search",
        bgColor: "btn-bg-color"
        , close: false
    },
    {
        title: "CANCEL",
        bgColor: "bg-danger btn-box-shadow"
        , close: true
    }]
    const exploreFullWForms = [
        {
            labelName: "Pick Up Location",
            placeHolder: ""
        },
        {
            labelName: "Drop Off Location",
            placeHolder: ""
        },
    ]
    const exploreHalfWForms = [
        {
            labelName: "Pick Up Date",
        },
        {
            labelName: "Drop Date",
        },
    ]
    return (
        <div className='mt-sm-4 mt-5'>
            <h2 className='home-headings'>Explore the Spark Car Fleet </h2>
            <p className='fs-15 fw-500 text-grey text-center mb-5'>Where your journey begins with an exquisite fleet of vehicles for an unforgettable experience.</p>
            <div>
                <Carousel responsive={responsive} infinite={true} autoPlay={true}
                >
                    {packages.map((item, key) => (
                        <div className='card' key={key} style={{ boxShadow: "3px 3px 9px rgba(164, 164, 186, 0.2)" }}>
                            <div className="card-header border-0 px-2">
                                <div className='w-100'>
                                    <img src={item.img} alt="" className='w-100 rounded-2' />
                                </div>
                            </div>
                            <div className="card-content px-3">
                                <div className="card-body">
                                    <h5 className='fs-18 fw-bold'>{item.title}</h5>
                                    <div className='d-flex gap-3 mb-1'>
                                        <div className='d-flex align-items-center gap-1 fw-600 fs-14'>
                                            <img src={PersonIcon} alt="" style={{ height: "15px" }} />4
                                        </div>
                                        <div className='d-flex align-items-center gap-1 fw-600 fs-14'>
                                            <img src={Two} alt="" style={{ height: "15px" }} />4
                                        </div>
                                        <div className='d-flex align-items-center gap-1 fw-600 fs-14'>
                                            <img src={WindowIcon} alt="" style={{ height: "15px" }} />4
                                        </div>
                                    </div>
                                    <p className='fs-14 fw-bold mb-0 d-flex gap-1 align-items-center'><img src={CarIcon} style={{ height: "15px" }} alt="" />{item.packageTitle}</p>
                                </div>
                                <div className="card-footer bg-transparent d-flex justify-content-between align-items-center pb-3">
                                    <div>
                                        <p className='fs-14 fw-500 mb-0 text-grey'>Starting rate from</p>
                                        <h3 className='fw-bold'>2000</h3>
                                    </div>
                                    <div>
                                        <button className="btn btn-sm btn-bg-color text-light fw-600 px-3 py-1" data-bs-toggle="modal" data-bs-target="#exploreExampleModal" data-bs-whatever="@mdo">Rent Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
                <div>
                    <div className="modal fade" id="exploreExampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <Modal headerTitle="Change Location and Time" footerBtns={exploreButtons} fullWForms={exploreFullWForms} halfWForms={exploreHalfWForms} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore
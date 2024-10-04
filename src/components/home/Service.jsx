import React from 'react'
import Rentcar from "../../assets/Images/spark-car-home-rent-a-car.png";
import Hiredriver from "../../assets/Images/spark-car-home-hire-driver.png";
import Selfdriving from "../../assets/Images/spark-car-home-self-driving.png"
const Service = ({ servicesList }) => {
    return (
        <div>
            <h3 className='fw-600 mt-5 mb-5' style={{ letterSpacing: "-2px" }}>Looking for a <span style={{ color: "#1ecb15" }}>Car</span>? Rent a Car in just Few Easy Steps.
            </h3>
            <div className="card">
                <div className="card-body row py-5">
                    <div className="col-4">
                        <p className='fs-16'>Choose a service</p>
                        <div className='d-flex gap-4'>
                            <div className='text-center'>
                                <img src={Rentcar} alt="" />
                                <span className='d-block fs-14'>Rent a Car</span>
                            </div>
                            <div className='text-center'>
                                <img src={Hiredriver} alt="" />
                                <span className='d-block fs-14'>Hire a Driver</span>
                            </div>
                            <div className='text-center'>
                                <img src={Selfdriving} alt="" />
                                <span className='d-block fs-14'>Self-Drive</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <form action="#" className='row gy-3'>
                            <div className="col-6">
                                <label htmlFor="" className='form-label fs-15 fw-600'>Pick Up Location</label>
                                <input type="text" className="form-control rounded-1" placeholder='Please Enter From Location ' style={{ fontSize: "14px" }} />
                            </div>
                            <div className="col-6"><label htmlFor="" className='form-label fs-15 fw-600'>
                                Drop Off Location</label>
                                <input type="text" className="form-control rounded-1" />
                            </div>
                            <div className="col-6">
                                <label htmlFor="" className='fs-15 fw-600 form-label'>Pick Up Date</label>
                                <input type="text" className='form-control rounded-1' />
                            </div>
                            <div className="col-6">
                                <label htmlFor="" className='fs-15 fw-600 form-label'>Drop Date</label>
                                <input type="text" className='form-control rounded-1' />
                            </div>
                            <div className="col-12 d-flex justify-content-end mt-5">
                                <button className="btn fs-14 btn-bg-color text-light fw-600 rounded-1 ">Find Vehicle</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <ul className='d-flex mt-5 gap-3 mb-0'>
                {servicesList.map((service, key) => (
                    <div key={key}>
                        <h5 style={{ width: "255px", fontSize: "18px" }} className='fw-600 mb-3'>{service.title}</h5>
                        <p className='fs-14' style={{ width: "280px" }}>{service.content}</p>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Service
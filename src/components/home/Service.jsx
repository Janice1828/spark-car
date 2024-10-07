import React from 'react';
import { useState } from 'react';
import Rentcar from "../../assets/Images/spark-car-home-rent-a-car.png";
import Hiredriver from "../../assets/Images/spark-car-home-hire-driver.png";
import Selfdriving from "../../assets/Images/spark-car-home-self-driving.png"
const Service = ({ servicesList }) => {
    const [check, setCheck] = useState("rent-car")
    console.log(check)
    $(document).ready(function () {
        $(".pick-up-location").select2(
            {
                placeholder: "Please enter from location",
            }
        );
        $(".drop-off-location").select2(
            {
                placeholder: "Please enter to location",
            }
        );
        $(".vehicle-type").select2(
            {
                placeholder: "Select a vehicle type",
            })
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        var currentDateTime =
            ("0" + (now.getMonth() + 1)).slice(-2) +
            "/" +
            ("0" + now.getDate()).slice(-2) +
            "/" +
            now.getFullYear() +
            ", " +
            ("0" + hours).slice(-2) +
            ":" +
            minutes +
            " " +
            ampm;
        $("#pick-up-date").val(currentDateTime);
        $("#pick-up-date").datetimepicker();
        $("#drop-date").datetimepicker();
        $(".drop-date").datetimepicker();
        $("#empty-pick-up-date").datetimepicker();

    });
    return (
        <div className='home-service-container'>
            <h3 className='fw-600 mt-5 mb-5' style={{ letterSpacing: "-2px" }}>Looking for a <span style={{ color: "#1ecb15" }}>Car</span>? Rent a Car in just Few Easy Steps.
            </h3>
            <div className="card">
                <div className="card-body row py-3">
                    <div className="col-4">
                        <p className='fs-15 fw-600'>Choose a service</p>
                        <ul className="nav nav-pills d-flex mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link active"
                                    id="pills-home-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-home"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-home"
                                    aria-selected="true" onClick={() => setCheck('rent-car')}
                                >
                                    <div className='text-center text-dark position-relative'>
                                        <i className={check == 'rent-car' ? 'fa-solid fa-circle-check text-green position-absolute' : 'd-none'} style={{ right: "0px" }}></i>
                                        <img src={Rentcar} alt="" style={{ width: "100px" }} />
                                        <span className='d-block fs-14'>Rent a Car</span>
                                    </div>
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="pills-profile-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-profile"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-profile"
                                    aria-selected="false" onClick={() => setCheck('hire-driver')}
                                >
                                    <div className='text-center text-dark position-relative'>
                                        <i className={check == 'hire-driver' ? 'fa-solid fa-circle-check text-green position-absolute' : 'd-none'} style={{ right: "0px" }}></i>
                                        <img src={Hiredriver} alt="" style={{ width: "100px" }} />
                                        <span className='d-block fs-14'>Hire a Driver</span>
                                    </div>
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="pills-contact-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-contact"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-contact"
                                    aria-selected="false" onClick={() => setCheck('self-drive')}
                                >
                                    <div className='text-center text-dark position-relative'>
                                        <i className={check == 'self-drive' ? 'fa-solid fa-circle-check text-green position-absolute' : 'd-none'} style={{ right: "0px" }}></i>

                                        <img src={Selfdriving} alt="" style={{ width: "100px" }} />
                                        <span className='d-block fs-14'>Self-Drive</span>
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-8">
                        <div className="tab-content" id="pills-tabContent">
                            <div
                                className="tab-pane fade show active"
                                id="pills-home"
                                role="tabpanel"
                                aria-labelledby="pills-home-tab"
                            >
                                <form action="#" className='row gy-3'>
                                    <div className="col-6">
                                        <label htmlFor="" className='form-label fs-15 fw-600'>Pick Up Location</label>
                                        <select className="pick-up-location form-select" style={{ fontSize: "14px", height: "40px" }} name="state">
                                            <option ></option>
                                        </select>
                                    </div>
                                    <div className="col-6"><label htmlFor="" className='form-label fs-15 fw-600'>
                                        Drop Off Location</label>
                                        <select className="drop-off-location form-select" style={{ fontSize: "14px", height: "40px" }} name="state">
                                            <option ></option>
                                        </select>
                                        {/* <input type="text" className="form-control rounded-1" /> */}
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="" className='fs-15 fw-600 form-label'>Pick Up Date</label>
                                        <input type="text" className='form-control rounded-1' id='pick-up-date' />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="" className='fs-15 fw-600 form-label'>Drop Date</label>
                                        <input type="text" className='form-control rounded-1' id='drop-date' />
                                    </div>
                                    <div className="col-12 d-flex justify-content-end mt-3 mb-4">
                                        <button className="btn fs-14 btn-bg-color text-light fw-600 rounded-1 ">Find Vehicle</button>
                                    </div>

                                </form>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="pills-profile"
                                role="tabpanel"
                                aria-labelledby="pills-profile-tab"
                            >
                                <form action="#" className='row gy-3'>
                                    <div className="col-6">
                                        <label htmlFor="" className='form-label fs-15 fw-600'>Pick Up Location</label>
                                        <select className="pick-up-location form-select" style={{ fontSize: "14px", height: "40px" }} name="state">
                                            <option ></option>
                                        </select>
                                    </div>
                                    <div className="col-6"><label htmlFor="" className='form-label fs-15 fw-600'>
                                        Drop Off Location</label>

                                        <select className="drop-off-location form-select" style={{ fontSize: "14px", height: "40px" }} name="state">
                                            <option ></option>
                                        </select>

                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="" className='fs-15 fw-600 form-label'>Pick Up Date</label>
                                        <input type="text" className='form-control rounded-1' id='empty-pick-up-date' />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="" className='fs-15 fw-600 form-label'>Drop Date</label>
                                        <input type="text" className='form-control rounded-1 drop-date' />
                                    </div>
                                    <div className='col-6'>
                                        <label htmlFor="" className="form-label fs-15 fw-600">Vehicle Type To Drive</label>
                                        <select className="vehicle-type form-select" style={{ fontSize: "14px", height: "40px" }} name="state">
                                            <option ></option>
                                        </select>
                                    </div>
                                    <div className="col-12 d-flex justify-content-end mt-3 mb-4">
                                        <button className="btn fs-14 btn-bg-color text-light fw-600 rounded-1 ">Find Vehicle</button>
                                    </div>

                                </form>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="pills-contact"
                                role="tabpanel"
                                aria-labelledby="pills-contact-tab"
                            >
                                <form action="#" className='row gy-3'>
                                    <div className="col-6">
                                        <label htmlFor="" className='form-label fs-15 fw-600'>From</label>
                                        <input type="text" className="form-control rounded-1" placeholder='Trade Tower, Thapathali, Kathmandu' disabled style={{ fontSize: "14px" }} />
                                    </div>
                                    <div className="col-6"><label htmlFor="" className='form-label fs-15 fw-600'>
                                        To</label>
                                        <select className="drop-off-location form-select" style={{ fontSize: "14px", height: "40px" }} name="state">
                                            <option ></option>
                                        </select>
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="" className='fs-15 fw-600 form-label'>From Date</label>
                                        <input type="text" className='form-control rounded-1 drop-date' />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="" className='fs-15 fw-600 form-label'>To Date</label>
                                        <input type="text" className='form-control rounded-1 drop-date' />
                                    </div>
                                    <div className="col-12 d-flex justify-content-end mt-3 mb-4">
                                        <button className="btn fs-14 btn-bg-color text-light fw-600 rounded-1 ">Find Vehicle</button>
                                    </div>

                                </form>
                            </div>

                        </div>

                    </div>
                </div>
            </div >
            <ul className='d-flex mt-5 gap-3 mb-0'>
                {servicesList.map((service, key) => (
                    <div key={key}>
                        <h5 style={{ width: "255px", fontSize: "18px" }} className='fw-600 mb-3'>{service.title}</h5>
                        <p className='fs-14' style={{ width: "280px" }}>{service.content}</p>
                    </div>
                ))}
            </ul>
        </div >
    )
}

export default Service
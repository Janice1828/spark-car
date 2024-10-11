import React from 'react'
import Specialpackage from "../../assets/Images/special-package.png"
import Modal from '../global/Modal'
const Packages = ({ packages }) => {
    const packageseButtons = [{
        title: "Search",
        bgColor: "btn-bg-color"
        , close: false
    },
    {
        title: "CANCEL",
        bgColor: "bg-danger btn-box-shadow"
        , close: true
    }]
    const packagesFullWForms = [
        {
            labelName: "Pick Up Location",
            placeHolder: ""
        },
        {
            labelName: "Drop Off Location",
            placeHolder: ""
        },
    ]
    const packagesHalfWForms = [
        {
            labelName: "Pick Up Date",
        },
        {
            labelName: "Drop Date",
        },
    ]
    return (
        <div className='mb-5 mt-5'>
            <h2 className='home-headings pt-5'>Our Special Packages</h2>
            <p className='fs-15 fw-500 mb-5 text-grey text-center'>Where your journey begins with an exquisite fleet of vehicles for an unforgettable experience.</p>
            <div className='card p-2'>
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item position-relative active" data-bs-interval="10000">
                            <img src={Specialpackage} className="d-block w-100" alt="..." />
                            <button className='btn-bg-color position-absolute border-0 rounded-1 fs-14 px-4 text-light py-2 fw-600' style={{ bottom: "10px", right: "10px", zIndex: "100" }} data-bs-toggle="modal" data-bs-target="#packagesExampleModal" data-bs-whatever="@mdo">Rent Now</button>
                        </div>
                        <div className="carousel-item position-relative" data-bs-interval="2000">
                            <img src={Specialpackage} className="d-block w-100" alt="..." />
                            <button className='btn-bg-color position-absolute border-0 rounded-1 fs-14 px-4 text-light py-2 fw-600' style={{ bottom: "10px", right: "10px", zIndex: "100" }} data-bs-toggle="modal" data-bs-target="#packagesExampleModal" data-bs-whatever="@mdo">Rent Now</button>

                        </div>
                        <div className="carousel-item position-relative">
                            <img src={Specialpackage} className="d-block w-100" alt="..." />
                            <button className='btn-bg-color position-absolute border-0 rounded-1 fs-14 px-4 text-light py-2 fw-600' style={{ bottom: "10px", right: "10px", zIndex: "100" }} data-bs-toggle="modal" data-bs-target="#packagesExampleModal" data-bs-whatever="@mdo">Rent Now</button>

                        </div>
                    </div>
                    <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon carousel-btn-bg-color" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon carousel-btn-bg-color" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>
            <div>
                <div class="modal fade" id="packagesExampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <Modal headerTitle="Change Location and Time" footerBtns={packageseButtons} fullWForms={packagesFullWForms} halfWForms={packagesHalfWForms} />
                </div>
            </div>
        </div>
    )
}

export default Packages
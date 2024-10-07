import React from 'react'
import Specialpackage from "../../assets/Images/special-package.png"
const Packages = ({ packages }) => {
    return (
        <div className='mb-5 mt-5'>
            <h2 className='home-headings pt-5'>Our Special Packages</h2>
            <p className='fs-15 fw-500 mb-5 text-grey text-center'>Where your journey begins with an exquisite fleet of vehicles for an unforgettable experience.</p>
            <div className='card p-2'>
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <img src={Specialpackage} className="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src={Specialpackage} className="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={Specialpackage} className="d-block w-100" alt="..." />
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
        </div>
    )
}

export default Packages
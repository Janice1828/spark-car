import React from 'react'

const FurtherInformation = ({ number }) => {
    return (
        <div className='row py-5 mt-5' >
            <div className="col-6">
                <h2 className='fw-500' style={{ lineHeight: "55px" }}>
                    Call us for further information. Customer care is here to help you anytime.
                </h2>
            </div>
            <div className="col-6 d d-flex flex-column align-items-end">
                <i class="fa-solid fa-phone mb-2" style={{ fontSize: "40px" }}></i>
                <h5 className='fs-15' style={{ letterSpacing: "4px", fontWeight: "550" }}>Call Us Now
                </h5>
                <h2 className='fw-bold mb-3'>{number}</h2>
                <a href="#" className="btn btn-success btn-bg-color text-light  rounded-1 border-0 fw-bold">Contact Us</a>
            </div>
        </div>
    )
}

export default FurtherInformation
import React from 'react'

const FurtherInformation = ({ number }) => {
    return (
        <div className='row py-5 ' >
            <div className="col-sm-6 d-flex d-sm-block justify-content-center">
                <h2 className='fw-500 text-center' style={{ lineHeight: "55px", letterSpacing: "-3px" }}>
                    Call us for further information.<br /> Customer care is here to help you<br /> anytime.
                </h2>
            </div>
            <div className="col-sm-6 d-flex flex-column align-items-sm-end align-items-center">
                <i className="fa-solid fa-phone mb-2" style={{ fontSize: "40px" }}></i>
                <h5 className='fs-15' style={{ letterSpacing: "4px", fontWeight: "550" }}>Call Us Now
                </h5>
                <h2 className='fw-bold mb-3'>{number}</h2>
                <a href="#" className="btn btn-success btn-bg-color text-light  rounded-1 border-0 fw-bold">Contact Us</a>
            </div>
        </div>
    )
}

export default FurtherInformation
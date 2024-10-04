import React from 'react'

const FurtherInformation = ({ number }) => {
    return (
        <div className='row' >
            <div className="col-6">
                <h1 className='fw-400' style={{ lineHeight: "64px" }}>
                    Call us for further information. Customer care is here to help you anytime.
                </h1>
            </div>
            <div className="col-6">
                <i></i>
                <h5 style={{ fontSize: "12px" }} className='fw-400'>Call Us Now
                </h5>
                <h2 className='fw-bold'>{number}</h2>
                <a href="#" className="btn btn-success btn-bg-color text-light px-3 rounded-1 border-0 fw-bold">Contact Us</a>
            </div>
        </div>
    )
}

export default FurtherInformation
import React from 'react'

const FurtherInformation = ({ number }) => {
    return (
        <div className='row'>
            <div className="col-6">
                <h2>
                    Call us for further information. Customer care is here to help you anytime.
                </h2>
            </div>
            <div className="col-6">
                <i></i>
                <h5>Call Us Now
                </h5>
                <h4>{number}</h4>
                <a href="#" className="btn btn-success">Contact Us</a>
            </div>
        </div>
    )
}

export default FurtherInformation
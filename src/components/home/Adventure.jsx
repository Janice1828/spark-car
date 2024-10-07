import React from 'react'

const Adventure = ({ adventureServices }) => {

    return (
        <div className='row pb-3 position-relative' style={{ zIndex: "1" }}>

            <div className='d-flex gap-4'>
                <div style={{ paddingRight: "40px" }}>
                    <h3 className='fw-600' style={{ letterSpacing: "-3px" }}>Let Your Adventure <br /> Begin
                    </h3>
                </div>
                {adventureServices.map((service, key) => (
                    <div key={key}>
                        <div className='btn-bg-color rounded-2 mb-4 d-flex justify-content-center align-items-center' style={{ height: "80px", width: "80px" }}>
                            <i className={`${service.icon} `} style={{ fontSize: "40px" }}></i>
                        </div>
                        <p className='fs-14 fw-600 mb-0' style={{ lineHeight: "27px" }}>{service.title}</p>
                        <p className='fs-14 fw-600' style={{ width: "315px", lineHeight: "27px" }}>{service.content}</p>
                    </div>
                ))}
            </div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Adventure
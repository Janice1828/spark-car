import React from 'react'

const Tourpackage = ({ packages }) => {

    return (
        <div className='mt-4 mb-5'>
            <h2 className='home-headings'>Tour Packages</h2>
            <p className='text-center mb-4'>
                Where your journey begins with an exquisite fleet of vehicles for an unforgettable experience.
            </p>
            <div className="packages d-flex justify-content-center gap-3">
                {packages.map((item, key) => (
                    <div className="card" key={key} style={{ boxShadow: "3px 3px 9px rgba(164, 164, 186, 0.2)" }}>
                        <div className="card-content px-2 py-2">
                            <div style={{ width: "350px", height: "250px" }}>
                                <img src={item.img} alt="" className='w-100 h-100 rounded-2' />
                            </div>
                            <div className='d-flex justify-content-between px-3 py-3'>
                                <div>
                                    <h5 className='fw-600' style={{ color: "rgb(25,158,28)" }}>{item.placeName}</h5>
                                    <h4 className='fw-bold'>NPR {item.cost}</h4>
                                </div>
                                <div>
                                    <p className='fs-14 fw-500 text-end d-flex gap-1 align-items-center'><i className="fa-regular fa-clock text-primary fw-500"></i>{item.time}</p>
                                    <button className="btn btn-sm btn-bg-color text-light fw-600 px-3 py-1">Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Tourpackage
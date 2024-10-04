import React from 'react'

const Tourpackage = ({ packages }) => {

    return (
        <div>
            <h3 className='fw-600'>Tour Packages</h3>
            <p>
                Where your journey begins with an exquisite fleet of vehicles for an unforgettable experience.
            </p>
            <div className="packages d-flex">
                {packages.map((item, key) => (
                    <div className="card" key={key}>
                        <div className="card-content">
                            <img src="" alt="Testing" />
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <h5 className='fw-600' style={{ color: "rgb(25,158,28)" }}>{item.placeName}</h5>
                                    <h3 className='fw-bold'>{item.cost}</h3>
                                </div>
                                <div>
                                    <p className='fs-14 fw-500'>{item.time}</p>
                                    <button className="btn btn-sm btn-success">Buy</button>
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
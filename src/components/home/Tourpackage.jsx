import React from 'react'

const Tourpackage = ({ packages }) => {

    return (
        <div>
            <h3>Tour Packages</h3>
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
                                    <h5>{item.placeName}</h5>
                                    <h5>{item.cost}</h5>
                                </div>
                                <div>
                                    <p>{item.time}</p>
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
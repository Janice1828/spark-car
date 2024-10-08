import React from 'react'

const Branches = ({ branches }) => {
    console.log(branches)
    return (
        <>
            <h5 className="text-center fw-600">Our Branch Offices
            </h5>
            <div className='row gx-3 px-0 gy-5 mb-3'>
                {branches.map((branch, key) => (
                    <div className="col-4" key={key}>
                        <div className="card py-3 px-2" style={{ boxShadow: "3px 3px 9px rgba(164, 164, 186, 0.2)", border: "1px solid  #dddddd" }}>
                            <div className="card-body">
                                <h5 className='contactus-text-green fw-600 mb-4'>{branch.placeName}</h5>
                                <p className='fs-15 fw-500 text-grey gap-3 d-flex align-items-center'><i className='fa-solid fa-location-dot contactus-text-green'></i>{branch.placeName}</p>
                                <p className='fs-15 fw-500 text-grey gap-3 d-flex align-items-center'><i className='fa-solid fa-phone contactus-text-green'></i>{branch.phone}</p>
                                <p className='fs-15 fw-500 gap-3 d-flex align-items-center contactus-text-green'><i className='fa-regular fa-envelope contactus-text-green'></i>{branch.email}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Branches
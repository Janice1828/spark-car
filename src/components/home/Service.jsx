import React from 'react'

const Service = ({ servicesList }) => {
    return (
        <div>
            <h2 className='fw-600'>Looking for a Car? Rent a Car in just Few Easy Steps.
            </h2>
            <div className="card">
                <div className="card-body row">
                    <div className="col-4">
                        <p className='fs-16'>Choose a service</p>
                        <div className='d-flex'>
                            <div>
                                <img src="" alt="" />
                                <span>Rent a Car</span>
                            </div>
                            <div>
                                <img src="" alt="" />
                                <span>Hire a Driver</span>
                            </div>
                            <div>
                                <img src="" alt="" />
                                <span>Self-Drive</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <form action="#" className='row'>
                            <div className="col-6">
                                <label htmlFor="" className='form-label fs-16'>Pick Up Location</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-6"><label htmlFor="" className='fs-16'>
                                Drop Off Location</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-6">
                                <label htmlFor="" className='fs-16'>Pick Up Date</label>
                                <input type="text" className='form-control' />
                            </div>
                            <div className="col-6">
                                <label htmlFor="" className='fs-16'>Drop Date</label>
                                <input type="text" className='form-control' />
                            </div>
                            <div className="col-12 d-flex justify-content-end mt-3">
                                <button className="btn fs-14 btn-bg-color text-light fw-600 rounded-1 px-3">Find Vehicle</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <ul className='d-flex'>
                {servicesList.map((service, key) => (
                    <div key={key}>
                        <h5 className='fw-600'>{service.title}</h5>
                        <p className='fs-15'>{service.content}</p>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Service
import React from 'react'

const Service = ({ servicesList }) => {
    return (
        <div>
            <h1>Looking for a Car? Rent a Car in just Few Easy Steps.
            </h1>
            <div className="card">
                <div className="card-body row">
                    <div className="col-4">
                        <p>Choose a service</p>
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
                                <label htmlFor="" className='form-label'>Pick Up Location</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-6"><label htmlFor="">
                                Drop Off Location</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-6">
                                <label htmlFor="">Pick Up Date</label>
                                <input type="text" className='form-control' />
                            </div>
                            <div className="col-6">
                                <label htmlFor="">Drop Date</label>
                                <input type="text" className='form-control' />
                            </div>
                            <div className="col-12">
                                <button className="btn">Find Vehicle</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <ul>
                {servicesList.map((service, key) => (
                    <div key={key}>
                        <h5>{service.title}</h5>
                        <p>{service.content}</p>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Service
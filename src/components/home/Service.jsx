import React from 'react'

const Service = () => {
    const services = [{
        title: "Choose Your Favorite Vehicle",
        content: "Select your preferred vehicle, tailored to your journey as per your requirement."
    },
    {
        title: "Make a Booking",
        content: "You can make easy bookings through our user-friendly app or a simple phone call."
    },
    {
        title: "Pick-Up Location & Date",
        content: "Select your nearest location with the date and time for your journey."

    }
        ,
    {
        title: "Sit Back & Relax",
        content: "Sit back, relax, and let your safe and convenient journey begin with Spark Car. "
    }
    ]
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
                <li>
                    <h4>Choose Your Favorite Vehicle
                    </h4>
                    <p>Select your preferred vehicle, tailored to your journey as per your requirement.</p>
                </li>
                <li>
                    <h4>Make a Booking

                    </h4>
                    <p>You can make easy bookings through our user-friendly app or a simple phone call.
                    </p>
                </li>
                <li>
                    <h4>Pick-Up Location & Date

                    </h4>
                    <p>
                        Select your nearest location with the date and time for your journey.

                    </p>
                </li>
                <li>
                    <h4>Sit Back & Relax
                    </h4>
                    <p>Sit back, relax, and let your safe and convenient journey begin with Spark Car.
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default Service
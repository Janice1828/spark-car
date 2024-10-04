import React from 'react'

const Tourpackage = () => {
    const packages = [
        {
            img: "",
            placeName: "Pokhara",
            cost: 17000,
            time: "4D"
        },
        {
            img: "",
            placeName: "Mustang",
            cost: 17000,
            time: "8D"
        },
        {
            img: "",
            placeName: "Lumbini",
            cost: 20000,
            time: "7D"
        },
        {
            img: "",
            placeName: "Ilam",
            cost: 15000,
            time: "4D"
        },
    ]
    return (
        <div>
            <h3>Tour Packages</h3>
            <p>
                Where your journey begins with an exquisite fleet of vehicles for an unforgettable experience.
            </p>
            <div className="packages d-flex">
                <div className="card">
                    <div className="card-content">
                        <img src="" alt="Testing" />
                        <div className='d-flex justify-content-between'>
                            <div>
                                <h5>Chitwan</h5>
                                <h5>NPR 5000</h5>
                            </div>
                            <div>
                                <p>5d</p>
                                <button className="btn btn-sm btn-success">Buy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tourpackage
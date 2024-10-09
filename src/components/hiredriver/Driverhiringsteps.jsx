import React from 'react'

const Driverhiringsteps = ({ data }) => {
    return (
        <div className='driver-hiring-steps-container my-4'>
            <h2 className='text-center fw-bold hire-driver-green-color mt-3 mb-4'>Hire a Driver in Nepal in Just Three Easy Steps
            </h2>
            <div className="d-flex gap-3 justify-content-center">
                {data.map((step, key) => (
                    <div className='card px-3 pt-3 border-0' key={key} style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 40px 120px -40px", borderRadius: "8px", width: "380px", height: "fit-content" }}>
                        <div className="card-body">
                            <h2 className='fw-600 rounded-circle d-flex align-items-center justify-content-center text-light mb-3' style={{ background: "#0caa4b", width: "70px", height: "70px" }}>{key + 1}</h2>
                            <h6 className='fw-600 mb-4 hire-driver-green-color'>{step.title}</h6>
                            <p className='fs-15 lh-lg mb-0 pb-4'>{step.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Driverhiringsteps
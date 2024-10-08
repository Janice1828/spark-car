import React from 'react'

const Benefits = ({ data }) => {
    return (
        <div className='mb-5 pb-3'>
            <h2 className='fw-bold hire-driver-green-color mt-5 pt-2 mb-2'> Benefits of Hiring A Driver</h2>
            <div className='row gx-4 gy-4 justify-content-center'>
                {data.map((benefit, key) => (
                    <div key={key} className='card col-6 border-0'>
                        <div className="card-body text-center rounded-1" style={{ background: "rgb(243 243 243)" }}>
                            <i className={`${benefit.icon} fs-1 hire-driver-green-color`}></i>
                            <h5 className='hire-driver-green-color fw-bold mt-2 mb-3'>{benefit.title}</h5>
                            <p className='fs-14'>{benefit.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Benefits
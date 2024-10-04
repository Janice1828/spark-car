import React from 'react'

const Explore = ({ packages }) => {

    return (
        <div>
            <div className='d-flex'>
                {packages.map((item, key) => (
                    <div className='card' key={key}>
                        <div className="card-content">
                            <img src={item.img} alt="" />
                            <h5 className='fs-18 fw-bold'>{item.title}</h5>
                            <div></div>
                            <p>{item.packageTitle}</p>
                        </div>
                        <div className="card-footer">
                            <div>
                                <p className='fs-14 fw-400'>Starting rate from</p>
                                <h3 className='fw-bold'>2000</h3>
                            </div>
                            <div>
                                <a href="#" className='btn fs-14 fw-bolder btn-bg-color text-light rounded-1 px-3'>Rent Now</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Explore
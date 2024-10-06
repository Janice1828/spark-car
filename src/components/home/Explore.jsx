import React from 'react'
import CarIcon from "../../assets/Icons/car.svg"
import PersonIcon from "../../assets/Icons/1.svg";
import Two from "../../assets/Icons/2.svg";
import WindowIcon from "../../assets/Icons/3.svg";
const Explore = ({ packages }) => {

    return (
        <div className='mt-4'>
            <h2 className='home-headings'>Explore the Spark Car Fleet </h2>
            <p className='fs-15 fw-500 text-grey text-center mb-5'>Where your journey begins with an exquisite fleet of vehicles for an unforgettable experience.</p>
            <div className='d-flex justify-content-center gap-2'>
                {packages.map((item, key) => (
                    <div className='card' key={key} style={{ boxShadow: "3px 3px 9px rgba(164, 164, 186, 0.2)" }}>
                        <div className="card-header border-0 px-2">
                            <div style={{ width: "350px" }}>
                                <img src={item.img} alt="" className='w-100 rounded-2' />
                            </div>
                        </div>
                        <div className="card-content px-3">
                            <div className="card-body">
                                <h5 className='fs-18 fw-bold'>{item.title}</h5>
                                <div className='d-flex gap-3 mb-1'>
                                    <div className='d-flex align-items-center gap-1 fw-600 fs-14'>
                                        <img src={PersonIcon} alt="" style={{ height: "15px" }} />4
                                    </div>
                                    <div className='d-flex align-items-center gap-1 fw-600 fs-14'>
                                        <img src={Two} alt="" style={{ height: "15px" }} />4
                                    </div>
                                    <div className='d-flex align-items-center gap-1 fw-600 fs-14'>
                                        <img src={WindowIcon} alt="" style={{ height: "15px" }} />4
                                    </div>
                                </div>
                                <p className='fs-14 fw-bold mb-0 d-flex gap-1 align-items-center'><img src={CarIcon} style={{ height: "15px" }} alt="" />{item.packageTitle}</p>
                            </div>
                            <div className="card-footer bg-transparent d-flex justify-content-between align-items-center pb-3">
                                <div>
                                    <p className='fs-14 fw-500 mb-0 text-grey'>Starting rate from</p>
                                    <h3 className='fw-bold'>2000</h3>
                                </div>
                                <div>
                                    <a href="#" className='btn fs-14 fw-bolder btn-bg-color text-light rounded-1 '>Rent Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Explore
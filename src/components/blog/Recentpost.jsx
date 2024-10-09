import React from 'react'
import Image from "../../assets/Images/blog-test.png"
const Recentpost = () => {
    return (
        <div>
            <h5 className='fw-600 mb-4'>
                Recent Posts
            </h5>
            <div className='border-bottom d-flex gap-3'>
                <img src={Image} alt="" height={50} width={50} />
                <div>
                    <h6 className='fw-600'>Dashain Travels Made Easy with Spark Car</h6>
                    <p className=' text-grey d-flex align-items-center gap-2'>
                        <i className='fs-14 fa-regular fa-calendar text-success'></i>
                        <span style={{ fontSize: "12px" }}>Mon Sep 16 2024</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Recentpost
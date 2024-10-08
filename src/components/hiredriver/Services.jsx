import React from 'react'
import { LuDot } from "react-icons/lu";

const Services = ({ data }) => {
    return (
        <div>
            <h4 className='fw-600 text-grey mb-4' style={{ letterSpacing: "-1px" }}>Nepal's Most Trusted Professional Driver Hire Services            </h4>
            <div style={{ background: "#F4F4F4" }} className='p-3'>
                {data.map((service, key) => (
                    <p className='fs-15 fw-500 d-flex align-items-center gap-1' key={key}><LuDot style={{ fontSize: "30px" }} />{service}</p>
                ))}
            </div>
        </div>
    )
}

export default Services
import React from 'react'
import Marquee from "react-fast-marquee";

const Cartype = () => {
    return (
        <div className='bg-dark py-4'>
            <Marquee style={{ color: "#1ecb15 " }} speed={130}>
                <div className='d-flex gap-2'>
                    <h3 className='fw-600 d-flex align-items-center'>&nbsp;Hatchback <span className='d-inline-block' style={{ color: "rgb(114,114,114)", fontSize: "45px" }}>&nbsp;-</span></h3>
                    <h3 className='fw-600 d-flex align-items-center'>&nbsp;Sedan <span className='d-inline-block' style={{ color: "rgb(114,114,114)", fontSize: "45px" }}>&nbsp;-</span> </h3>
                    <h3 className='fw-600 d-flex align-items-center'>&nbsp;SUV <span className='d-inline-block' style={{ color: "rgb(114,114,114)", fontSize: "45px" }}>&nbsp;-</span></h3>
                    <h3 className='fw-600 d-flex align-items-center'>&nbsp;EV <span className='d-inline-block' style={{ color: "rgb(114,114,114)", fontSize: "45px" }}>&nbsp;-</span></h3>
                    <h3 className='fw-600 d-flex align-items-center'>&nbsp;Premium <span className='d-inline-block' style={{ color: "rgb(114,114,114)", fontSize: "45px" }}>&nbsp;-</span> </h3>
                    <h3 className='fw-600 d-flex align-items-center'>&nbsp;Pickup  <span className='d-inline-block' style={{ color: "rgb(114,114,114)", fontSize: "45px" }}>&nbsp;-</span></h3>
                    <h3 className='fw-600 d-flex align-items-center'>&nbsp;Vintage  <span className='d-inline-block' style={{ color: "rgb(114,114,114)", fontSize: "45px" }}>&nbsp;-</span></h3>
                    <h3 className='fw-600 d-flex align-items-center'>&nbsp;Van /Hiace <span className='d-inline-block' style={{ color: "rgb(114,114,114)", fontSize: "45px" }}>&nbsp;-</span></h3>
                    <h3 className='fw-600 d-flex align-items-center'>&nbsp;Coaster  <span className='d-inline-block' style={{ color: "rgb(114,114,114)", fontSize: "45px" }}>&nbsp;-</span></h3>
                    <h3 className='fw-600 d-flex align-items-center'> &nbsp;Sutlej Bus <span className='d-inline-block' style={{ color: "rgb(114,114,114)", fontSize: "45px" }}>&nbsp;-</span></h3>
                    <h3 className='fw-600 d-flex align-items-center'>&nbsp;Minivans <span className='d-inline-block' style={{ color: "rgb(114,114,114)", fontSize: "45px" }}>&nbsp;-</span></h3>
                    <h3 className='fw-600 d-flex align-items-center'>&nbsp;Exotic Cars <span className='d-inline-block' style={{ color: "rgb(114,114,114)", fontSize: "45px" }}>&nbsp;-</span></h3>
                </div>
            </Marquee>
        </div >
    )
}

export default Cartype
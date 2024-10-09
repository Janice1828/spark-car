import React from 'react'
import Image from "../../assets/Images/blog-test.png"
const Blogs = () => {
    return (
        <div className='card border-0 position-relative w-fit-content'>
            <div className="card-head">
                <div className='w-fit-content'>
                    <h4 className='rounded-2 py-1 px-2 btn-bg-color text-center text-light fw-bold position-absolute'>16<br /> <span className='fw-400' style={{ fontSize: "20px" }}>Sep</span></h4>
                </div>
                <img src={Image} alt="Image" />
            </div>
            <div className="card-body rounded-2 w-90 m-auto bg-light" style={{
                transform: "translateY(-60px)",
                zIndex: "100",
                background: "white",
                padding: "20px 30px"
            }}>
                <h5 className='fw-600 my-3' style={{ letterSpacing: "-1.3px" }}>Dashain Travel Made Easy</h5>
                <p className='fs-14 lh-lg text-grey' style={{ width: "330px" }}>In this article, we will provide you with essential tips and factors to consider when making your decision and finding out how to rent a c..
                </p>
                <div>
                    <button className='btn-bg-color px-3 py-2 fs-15 border-0 rounded-1 text-light fw-600'>Read More</button>
                </div>
            </div>
        </div >
    )
}

export default Blogs
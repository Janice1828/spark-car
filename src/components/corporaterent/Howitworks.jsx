import { div } from 'framer-motion/client';
import React from 'react'
import { LuDot } from "react-icons/lu";

const Howitworks = ({ data }) => {
    return (
        <div style={{ background: "#F6F6F6" }} className='mt-4 pb-5'>
            <h6 className='text-center text-grey fw-600 pt-5 pb-4' style={{ fontSize: "17px", letterSpacing: "-1px" }}>HOW IT WORKS
            </h6>
            <h3 className='text-center fw-600 mt-2 mb-5' style={{ letterSpacing: "-1.8px" }}>
                Become Our Corporate Client in Just Four Easy Steps
            </h3>
            <div className='d-flex flex-column m-auto w-75 px-5 pt-5'>
                {data.map((step, key) => (
                    <div key={key} className='d-flex justify-content-between'>
                        <div>
                            <h5 className='fw-bold' style={{ letterSpacing: "-1.5px" }}>{step.title}</h5>
                            <div className='d-flex gap-2'>
                                <LuDot className='text-grey' style={{ fontSize: "35px" }} />
                                <p className='fs-14 lh-lg' style={{ width: "395px" }}>{step.content}</p>
                            </div>
                        </div>
                        <div>
                            <img src={step.img} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Howitworks
import React from 'react'
import Car from "../../assets/Images/spark-car-home-car.png"
const Whysparkcar = ({ benefitsList }) => {
    const count = benefitsList.length;
    const leftBenefits = benefitsList.slice(0, count / 2);
    const rightBenefits = benefitsList.slice(count / 2, count);
    return (
        <>
            <div className='row my-5'>
                <div className="col-12 mb-4"><h2 className='home-headings'>Why Spark car?</h2></div>
                <div className='col-3'>
                    {leftBenefits.map((benefit, key) => (
                        <div key={key} className='d-flex gap-3'>
                            <i className={`${benefit.icon} h-100 text-light rounded-2`} style={{ fontSize: "25px", background: "#1ecb15", padding: "12px" }}></i>
                            <div>
                                <h6 className='fw-600'>{benefit.title}</h6>
                                <p className='fs-14 text-grey lh-lg' style={{ width: "260px" }}>
                                    {benefit.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='col-6'>
                    <img src={Car} alt="" className='w-100' />
                </div>
                <div className='col-3'>
                    {rightBenefits.map((benefit, key) => (
                        <div key={key} className='d-flex gap-3'>
                            <div>
                                <h6 className='fw-600 text-end'>{benefit.title}</h6>
                                <p className='fs-14 text-grey lh-lg text-end' style={{ width: "237px" }}>
                                    {benefit.content}
                                </p>
                            </div>
                            <div className='d-flex align-items-center justify-content-center rounded-1' style={{ background: "#1ecb15", height: '50px', width: "50px" }}>
                                <i className={`${benefit.icon} text-light`} style={{ fontSize: "25px" }}></i>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </>
    )
}
export default Whysparkcar
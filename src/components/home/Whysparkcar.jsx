import React from 'react'
import Car from "../../assets/Images/spark-car-home-car.png"
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
const Whysparkcar = ({ benefitsList }) => {
    const count = benefitsList.length;
    const leftBenefits = benefitsList.slice(0, count / 2);
    const rightBenefits = benefitsList.slice(count / 2, count);
    const [isVisible, setIsVisible] = useState(false);
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const centerRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (leftRef.current) observer.observe(leftRef.current);
        if (rightRef.current) observer.observe(rightRef.current);
        if (centerRef.current) observer.observe(centerRef.current);

        return () => {
            if (leftRef.current) observer.unobserve(leftRef.current);
            if (rightRef.current) observer.unobserve(rightRef.current);
            if (centerRef.current) observer.unobserve(centerRef.current);
        };
    }, []);
    return (
        <>
            <div className='row my-5'>
                <div className="col-12 mb-4"><h2 className='home-headings'>Why Spark car?</h2></div>
                <div className='col-xl-3 d-flex justify-content-center'>
                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        ref={leftRef}
                    >
                        {leftBenefits.map((benefit, key) => (
                            <div key={key} className='d-flex gap-3'>
                                <i className={`${benefit.icon} h-100 text-light rounded-2`} style={{ fontSize: "25px", background: "#1ecb15", padding: "12px" }}></i>
                                <div>
                                    <h6 className='fw-600'>{benefit.title}</h6>
                                    <p className='fs-14 fw-500 text-grey lh-lg' >
                                        {benefit.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
                <motion.div
                    className='col-xl-6 px-4 mb-5 mb-xl-0'
                    initial={{ opacity: 0, y: 150 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    ref={leftRef}
                >
                    <div>
                        <img src={Car} alt="" className='img-fluid' />
                    </div>
                </motion.div>

                <div className='col-xl-3 d-flex justify-content-center'>
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        ref={leftRef}
                    >
                        {rightBenefits.map((benefit, key) => (
                            <div key={key} className='d-flex gap-3'>
                                <div>
                                    <h6 className='fw-600 text-end'>{benefit.title}</h6>
                                    <p className='fs-14 text-grey lh-lg text-end' >
                                        {benefit.content}
                                    </p>
                                </div>
                                <div className='d-flex align-items-center justify-content-center rounded-1' style={{ background: "#1ecb15", height: '50px', width: "50px" }}>
                                    <i className={`${benefit.icon} text-light`} style={{ fontSize: "25px", padding: "15px" }}></i>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div >
        </>
    )
}
export default Whysparkcar
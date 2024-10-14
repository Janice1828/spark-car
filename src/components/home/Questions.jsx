import React, { useState } from 'react'
import Greaterthan from "../../assets/Icons/greater-than-symbol.png"
const Questions = ({ questions }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div className='pt-5'>
            <h2 className='home-headings pb-4'>Have Any Questions?
            </h2>
            <div className='row'>
                {questions.map((question, key) => (
                    <div className='col-xxl-6' key={key}>
                        <button
                            type='button'
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapseExample-${key}`}
                            onClick={() => handleToggle(key)}
                            aria-expanded="false"
                            aria-controls={`collapseExample-${key}`}
                            className='w-100 border-0'
                        >
                            <div className='fw-500 py-3 h-100 px-4 fs-15 d-flex gap-2 align-items-center' style={{ background: "#f4f4f4" }}>
                                <img
                                    src={Greaterthan}
                                    className={activeIndex === key ? 'rotate' : 'normal'}
                                    alt=""
                                    style={{ height: "15px", transition: "transform 0.3s ease-in-out" }}
                                />
                                {question.question}
                            </div>
                        </button>
                        <div className="collapse rounded-0" id={`collapseExample-${key}`}>
                            <div className="card card-body rounded-0 border-0 fs-14 fw-500">
                                {question.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Questions
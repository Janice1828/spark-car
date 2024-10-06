import React from 'react'

const Questions = ({ questions }) => {

    return (
        <div className='pt-5'>
            <h2 className='home-headings pb-4'>Have Any Questions?
            </h2>
            <div className="row justify-content-center" style={{ columnGap: "20px" }}>
                {questions.map((question, key) => (
                    <div key={key} className='col-5 fw-500 px-4 py-3 fs-14' style={{ background: "#f4f4f4" }}>{question.question}</div>
                ))}
            </div>
        </div>
    )
}

export default Questions
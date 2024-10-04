import React from 'react'

const Questions = ({ questions }) => {

    return (
        <div>
            <h3 className='fw-600'>Have Any Questions?
            </h3>
            <div className="row">
                {questions.map((question, key) => (
                    <div key={key} className='col-6 fw-400'>{question.question}</div>
                ))}
            </div>
        </div>
    )
}

export default Questions
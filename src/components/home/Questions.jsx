import React from 'react'

const Questions = ({ questions }) => {

    return (
        <div>
            <h5>Have Any Questions?
            </h5>
            <div className="row">
                {questions.map((question, key) => (
                    <div key={key}>{question.question}</div>
                ))}
            </div>
        </div>
    )
}

export default Questions
import React from 'react'

const Records = ({ records }) => {
    return (
        <>
            <div>
                <h3 className='fw-600'>
                    We offer customers a diverse fleet of commercial and luxury cars customized to suit any requirements.
                </h3>
            </div>
            <div className='d-flex'>
                {records.map((record, key) => (
                    <div className='card' key={key}>
                        <div className="card-title">
                            <h1 className='fw-600'>{record.count}</h1>
                            <p>{record.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Records
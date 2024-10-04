import React from 'react'

const Records = ({ records }) => {
    return (
        <>
            <div>Records</div>
            {records.map((record, key) => (
                <div className='card' key={key}>
                    <div className="card-title">
                        <h5>{record.count}</h5>
                        <p>{record.title}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Records
import React from 'react'

const Adventure = ({ adventureServices }) => {

    return (
        <div className='row'>
            <div>
                <h2>Let Your Adventure Begin
                </h2>
            </div>
            <div className='d-flex'>
                {adventureServices.map((service, key) => (
                    <div key={key}>
                        <i></i>
                        <p className='fs-16 fw-400'>{service.title}</p>
                        <p className='fs-16 fw-400'>{service.content}</p>
                    </div>
                ))}
            </div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Adventure
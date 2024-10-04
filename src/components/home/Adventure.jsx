import React from 'react'

const Adventure = ({ adventureServices }) => {

    return (
        <div className='row'>
            <div>
                <h2>Let Your Adventure Begin
                </h2>
            </div>
            <div>
                {adventureServices.map((service, key) => (
                    <div key={key}>
                        <i></i>
                        <p>{service.title}</p>
                        <p>{service.content}</p>
                    </div>
                ))}
            </div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Adventure
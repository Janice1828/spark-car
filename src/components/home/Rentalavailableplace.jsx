import React from 'react'

const Rentalavailableplace = ({ places }) => {

    return (
        <div>
            <h2 className='fw-bold'>Car Rental Service In Nepal</h2>
            <div className="row">
                {places.map((item, key) => (
                    <div key={key} className='col-4 fw-400'>
                        {item.title}
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Rentalavailableplace
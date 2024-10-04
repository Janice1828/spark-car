import React from 'react'

const Rentalavailableplace = ({ places }) => {

    return (
        <div className='mb-5'>
            <h4 className='fw-bold text-center mb-4 mt-5' style={{ color: "rgb(25, 158, 28)" }}>Car Rental Service In Nepal</h4>
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
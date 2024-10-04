import React from 'react'

const Rentalavailableplace = ({ places }) => {

    return (
        <div>
            <h4>Car Rental Service In Nepal</h4>
            <div className="row">
                {places.map((item, key) => (
                    <div key={key} className='col-4'>
                        {item.title}
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Rentalavailableplace
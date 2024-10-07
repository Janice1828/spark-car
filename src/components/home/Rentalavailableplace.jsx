import React from 'react'

const Rentalavailableplace = ({ places }) => {
    return (
        <div className='mb-5 mt-5'>
            <h2 className='home-headings pt-5 pb-3' style={{ color: "rgb(25, 158, 28)" }}>Car Rental Service In Nepal</h2>
            <div className="row w-75 m-auto mt-2 gy-2">
                {places.map((item, key) => (
                    <div key={key} className={item.isAvailable == 'Yes' ? 'fs-14 col-4 text-green' : 'fs-14 col-4'}>
                        {item.title}
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Rentalavailableplace
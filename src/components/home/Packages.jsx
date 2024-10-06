import React from 'react'
import Specialpackage from "../../assets/Images/special-package.png"
const Packages = ({ packages }) => {

    return (
        <div className='mb-5 mt-5'>
            <h2 className='home-headings pt-5'>Our Special Packages</h2>
            <p className='fs-15 fw-500 mb-5 text-grey text-center'>Where your journey begins with an exquisite fleet of vehicles for an unforgettable experience.</p>
            <div>
                <img src={Specialpackage} className='w-100' alt='' />
                {/* {packages.map((item, key) => (
                    <img key={key} src={item} />
                ))} */}
            </div>
        </div>
    )
}

export default Packages
import React from 'react'

const Packages = ({ packages }) => {

    return (
        <div>
            <h5>Packages</h5>
            <div>
                {packages.map((item, key) => (
                    <img key={key} src={item} />
                ))}
            </div>
        </div>
    )
}

export default Packages
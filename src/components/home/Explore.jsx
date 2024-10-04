import React from 'react'

const Explore = ({ packages }) => {

    return (
        <div>
            <div>
                {packages.map((item, key) => (
                    <div className='card' key={key}>
                        <div className="card-content">
                            <img src={item.img} alt="" />
                            <h5>{item.title}</h5>
                            <div></div>
                            <p>{item.packageTitle}</p>

                        </div>
                        <div className="card-footer">
                            <div>
                                <p>Starting rate from</p>
                                <h5>2000</h5>
                            </div>
                            <div>
                                <a href="#" className='btn'>Rent Now</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Explore
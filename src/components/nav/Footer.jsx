import React from 'react'

const Footer = () => {
    return (
        <div className='row text-light'>
            <div className="col-3">
                <h5 className='fs-18 fw-600'>About us</h5>
                <p className='fs-15 fw-400' style={{ lineHeight: "27px" }}>
                    Established in 1996, Spark Car stands as Nepal's best vehicle rental company, offering an unparalleled experience in travel. With a commitment to excellence, we provide car rental in Kathmandu and all over Nepal along with driver hire services marked by professionalism, at the best price.
                </p>
            </div>
            <div className="col-3">
                <h5 className='fs-18 fw-600'>Contact Info
                </h5>
                <p className='fs-16 fw-400'><i></i><span>Trade Tower Thapathali, address2</span></p>
                <p className='fs-16 fw-400'><i></i><span>01-5971616/ 9801101924</span></p>
                <p className='fs-16 fw-400'><i></i><span>info@sparkcar.org</span></p>
            </div>
            <div className="col-3">
                <h5 className='fs-18 fw-600'>Quick Links</h5>
                <ul>
                    <li className='list-group-item'><a href="#" className='fs-15 fw-400 text-decoration-none text-light'>About</a></li>
                    <li className='list-group-item'><a href="#" className='fs-15 fw-400 text-decoration-none text-light'>Blog</a></li>
                    <li className='list-group-item'><a href="#" className='fs-15 fw-400 text-decoration-none text-light'>Contact</a></li>
                    <li className='list-group-item'><a href="#" className='fs-15 fw-400 text-decoration-none text-light'>Register as Vendor</a></li>
                </ul>
            </div>
            <div className="col-3">
                <h5 className='fs-18 fw-600'>Social Network</h5>
                <div className='d-flex'></div>
                <h5 className='fs-18 fw-600'>Download</h5>
                <div></div>
            </div>
        </div>
    )
}

export default Footer
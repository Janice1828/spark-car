import React from 'react'
import IsoOne from "../../assets/Images/iso1.png"
import IsoTwo from "../../assets/Images/iso_2.png"
import IsoThree from "../../assets/Images/iso_3.png"
import Appstore from "../../assets/Icons/appstore.png";
import Googleplay from "../../assets/Icons/google-play-white.svg";
const Footer = () => {
    const isoCertifications = [IsoOne, IsoTwo, IsoThree];
    const footerSocialMediaLinks = ["fa-brands fa-facebook-f", "fa-brands fa-instagram", "fa-brands fa-linkedin-in", "fa-brands fa-youtube"]
    return (
        <div className='pt-5'>
            <div className='row text-light pt-5'>
                <div className="col-3">
                    <h5 className='fs-18 fw-600 mb-3'>About us</h5>
                    <p className='fs-14 fw-500' style={{ lineHeight: "27px" }}>
                        Established in 1996, Spark Car stands as Nepal's best vehicle rental company, offering an unparalleled experience in travel. With a commitment to excellence, we provide car rental in Kathmandu and all over Nepal along with driver hire services marked by professionalism, at the best price.
                    </p>
                </div>
                <div className="col-3">
                    <h5 className='fs-18 fw-600 mb-3'>Contact Info
                    </h5>
                    <p className='fs-14 fw-500 d-flex gap-2 align-items-center'><i className="fa-solid fa-location-dot text-green fs-15"></i><span>Trade Tower Thapathali, address2</span></p>
                    <p className='fs-14 fw-500 d-flex gap-2 align-items-center'><i className="fa-solid fa-phone text-green fs-15"></i><span>01-5971616/ 9801101924</span></p>
                    <p className='fs-14 fw-500 d-flex gap-2 align-items-center'><i className="fa-solid fa-envelope text-green fs-15"></i><span>info@sparkcar.org</span></p>
                    <h5 className='fs-18 fw-600 mb-3'>ISO Certification</h5>
                    <div className='d-flex gap-2'>
                        {/* <img src="" alt="" /> */}
                        {isoCertifications.map((certificate, key) => (
                            <img src={certificate} key={key} alt='' style={{ width: "80px" }} />
                        ))}
                    </div>

                </div>
                <div className="col-3">
                    <h5 className='fs-18 fw-600 mb-3'>Quick Links</h5>
                    <ul className='px-0'>
                        <li className='list-group-item'><a href="#" className='fs-14 fw-500 text-decoration-none text-light'>About</a></li>
                        <li className='list-group-item'><a href="#" className='fs-14 fw-500 text-decoration-none text-light'>Blog</a></li>
                        <li className='list-group-item'><a href="#" className='fs-14 fw-500 text-decoration-none text-light'>Contact</a></li>
                        <li className='list-group-item'><a href="#" className='fs-14 fw-500 text-decoration-none text-light'>Register as Vendor</a></li>
                    </ul>
                </div>
                <div className="col-3">
                    <h5 className='fs-18 fw-600 mb-3'>Social Network</h5>
                    <div className='d-flex gap-1'>
                        {footerSocialMediaLinks.map((media, key) => (
                            <div key={key} className='bg-light rounded-circle d-flex align-items-center justify-content-center' style={{ height: "30px", width: "30px" }}>
                                <i className={`${media} text-success`} style={{ fontSize: "17px" }}></i>

                            </div>
                        ))}
                    </div>
                    <h5 className='fs-18 fw-600 mt-2 mb-3'>Download</h5>
                    <div>
                        <a href="#" className='d-block' style={{ width: "150px" }}>
                            <img src={Appstore} alt="" className='w-100' />
                        </a>
                        <a href="#" className='d-block mt-2' style={{ width: "150px" }}>
                            <img src={Googleplay} alt="" className='w-100' />
                        </a>
                    </div>
                </div>
                <div className="col-12 mt-5 d-flex justify-content-between py-4" style={{ borderTop: "1px solid rgba(255, 255, 255, .3)" }}>
                    <div className='fs-15 fw-500'>copyright 2023 - sparkcar</div>
                    <div className='fs-15 fw-500'>Privacy Policy</div>
                </div>
            </div>
        </div>
    )
}

export default Footer
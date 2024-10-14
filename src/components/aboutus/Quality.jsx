import React from 'react'
import quailtyImg from "../../assets/Images/about-quality.png"
const Quality = () => {
    return (
        <div className='row'>
            <div className="col-xxl-6">
                <img src={quailtyImg} className='img-fluid' alt="" />
            </div>
            <div className="col-xxl-6 mt-3 mt-xxl-0">
                <h4 className='fw-600 mb-4' style={{ fontSize: "28px", letterSpacing: "-2.5px" }}>
                    Only Quality For Clients
                </h4>
                <ul className="nav nav-tabs border-0 d-flex gap-4 mx-4" id="myTab" role="tablist">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">LUXURY</button>
                    <button className="nav-link" id="comfort-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">COMFORT</button>
                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">PRESTIGE</button>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active fs-14 lh-lg text-grey mt-3" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0"> Explore our luxury vehicle collection at Spark Car where each vehicle is selected with precision to ensure our customers a premium driving experience. With Spark Car, elevate your travel expectations and experience the unmatched elegance of our premium vehicles.
                    </div>
                    <div className="tab-pane fade fs-14 lh-lg text-grey mt-3" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">At Spark Car, we ensure you will have a comfortable ride and a seamless journey to any destination. It's not just transportation; it's an experience for your absolute relaxation and enjoyment.

                    </div>
                    <div className="tab-pane fade fs-14 lh-lg text-grey mt-3" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">Your safety is our priority. We do continuous monitoring with regular vehicle maintenance, to guarantee a secure journey every time you ride with us. Your peace of mind is our promise, so you can travel confidently and safely.

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quality
import React from 'react'

const Questions = () => {
    return (
        <>
            <div className="row gx-4 px-0 mt-4 mb-2">
                <div className="col-8 row gy-3">
                    <div className="col-12">
                        <h4 className='fw-600'>Do you have any question?
                        </h4>
                    </div>
                    <div className="col-4">
                        <input type="text" placeholder='Your Name' className="form-control py-2" />
                    </div>
                    <div className="col-4">
                        <input type="text" placeholder='Your Email' className="form-control py-2" />

                    </div>
                    <div className="col-4">
                        <input type="text" placeholder='Your Phone' className="form-control py-2" />

                    </div>
                    <div className="col-12 mt-3">
                        <textarea name="" id="" rows={5} className='w-100 p-2' placeholder='Your Message'></textarea>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-bg-color text-light fs-15 fw-600 rounded-1 px-4">Send Message</button>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card py-3 px-3" style={{ boxShadow: "3px 3px 9px rgba(164, 164, 186, 0.2)", border: "1px solid #dddddd" }}>
                        <div className="card-body">
                            <h5 className='fw-600 mb-3'>Head Office
                            </h5>
                            <p className='d-flex align-items-center gap-3 mb-1 fs-15 text-grey pb-1'><i className='fa-solid fa-location-dot contactus-text-green'></i>Trade Tower Thapathali</p>
                            <p className='d-flex align-items-center gap-3 mb-1 fs-15  text-grey pb-1'><i className='fa-solid fa-phone contactus-text-green'></i>01-5971616</p>
                            <p className='d-flex align-items-center gap-3 mb-1 fs-15 contactus-text-green '><i className='fa-regular fa-envelope'></i>info@sparkcar.org</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Questions    
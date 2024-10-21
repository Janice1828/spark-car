import React from 'react'
const Contactsnav = () => {
    const contacts = [
        {
            icon: "fa-solid fa-phone",
            value: "01-5971616"
        },
        {
            icon: "fa-solid fa-envelope",
            value: "info@sparkcar.org"
        }
    ];
    const links = ["fa-brands fa-facebook", "fa-brands fa-twitter", "fa-brands fa-youtube", "fa-brands fa-linkedin"]
    return (
        <>
            <div className='navbar px-md-6 py-3' style={{ background: "#222733" }}>
                <div className="row w-100 m-auto p-0 gx-0">
                    <div className="col-sm-6 d-flex gap-4 flex-column flex-md-row">{contacts.map((contact, key) => (
                        <div className='text-light' key={key}>
                            <div className='d-flex gap-2 align-items-center'>
                                <i className={`${contact.icon} fs-14`}></i>
                                <span className='fs-14 fw-100'>{contact.value}</span>
                            </div>
                        </div>
                    ))}
                    </div>
                    <div className='col-sm-6 text-light justify-content-sm-end mt-4 mt-sm-0 gap-3 d-flex align-items-center'>
                        {links.map((media, key) => (
                            <i className={`${media} fs-15 fw-400`} key={key}></i>
                        ))}
                    </div>
                </div>
            </div >
        </>
    )
}
export default Contactsnav
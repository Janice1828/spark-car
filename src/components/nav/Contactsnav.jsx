import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Contactsnav = ({ contacts, links }) => {
    return (
        <>
            <div className='navbar px-md-5 px-3' style={{ background: "#222733" }}>
                <div className="row w-100 m-auto p-0 gx-0">
                    <div className="col-6 d-flex gap-3">{contacts.map((contact, key) => (
                        <div className='text-light' key={key}>
                            <div className='d-flex gap-2 align-items-center'>
                                <i className={`${contact.icon} fs-14`}></i>
                                <span className='fs-14 fw-100'>{contact.value}</span>
                            </div>
                        </div>
                    ))}

                    </div>
                    <div className='col-6 text-light justify-content-end gap-3 d-flex align-items-center'>
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
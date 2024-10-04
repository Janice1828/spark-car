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
                            <div className='d-flex gap-2'>
                                <i className={contact.icon}></i>
                                <span>{contact.value}</span>
                            </div>
                        </div>
                    ))}

                    </div>
                    <div className='col-6 text-light justify-content-end gap-2 d-flex align-items-center'>
                        {links.map((media, key) => (
                            <i className={media} key={key}></i>
                        ))}
                    </div>
                </div>
            </div >
        </>
    )
}
export default Contactsnav
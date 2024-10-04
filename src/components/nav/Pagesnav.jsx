import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Pagesnav({ linksList, logo }) {
    return (
        <>
            <nav className="navbar bg-body-tertiary px-md-5 px-3">
                <div className='w-100'>
                    <div className='d-flex justify-content-between'>
                        <div className='bg-dark'>
                            <img src={logo} alt="" style={{ height: "50px" }} />
                        </div>
                        <div>
                            <ul className='d-flex gap-5'>
                                {linksList.map((link, key) => (
                                    <li key={key} className='list-group-item fs-15'>
                                        <Link className='text-decoration-none text-dark fw-600'>{link}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <a href='#' className="btn btn-bg-color text-light fs-14 fw-bold rounded-1 px-4 ">Sign In</a>
                        </div>
                    </div>
                    <button className="navbar-toggler d-block d-sm-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            Lorem
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Pagesnav;
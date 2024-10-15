import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from "../../assets/Images/spark-car-nav-logo-1.png"
import SigninImg from "../../assets/Images/sign-in.jpeg"
import SigninLogo from "../../assets/Images/sign-in-logo.png"
import Google from "../../assets/Images/google.png"
import { NavLink } from 'react-router-dom';
function Pagesnav() {
    const linksList = [
        {
            title: "Home",
            route: '/'
        },
        {
            title: "Hire a Driver",
            route: '/hiredriver'
        },
        ,
        {
            title: "Corporate Rent",
            route: "/corporaterent"
        },
        {
            title: "Blog",
            route: '/blog'
        }
        , {
            title: "About",
            route: '/about'
        }, {
            title: "Contact us",
            route: '/contactus'

        }]
    return (
        <>
            <nav className="navbar pages-nav-container bg-transparent ">
                <div className='w-100 d-flex d-xl-block justify-content-end'>
                    <div className='d-none d-xl-flex justify-content-between align-items-center'>
                        <div className=''>
                            <Link to="/">  <img src={logo} alt="" style={{ height: "50px" }} /> </Link>
                        </div>
                        <div>
                            <ul className='d-flex gap-5 mb-0'>
                                {linksList.map((link, key) => (
                                    <li key={key} className='list-group-item fs-15'>
                                        <Link className='text-decoration-none d-flex flex-column nav-title text-light fw-600' to={link.route}><p className='mb-0'>{link.title}</p>
                                            <div className='position-relative'>
                                                <span className="start-0  bottom-0 w-0  hover-line position-absolute"></span>
                                            </div>
                                        </Link>

                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <button className="btn btn-bg-color text-light fs-14 fw-bold rounded-1 px-4 py-2 " data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Sign In</button>
                            <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="text-dark row p-0 g-0">
                                            <div className="col-6 py-5 px-3">
                                                <div className='text-center mb-4'>
                                                    <img src={SigninLogo} className='w-50 m-auto ' alt="" />
                                                </div>
                                                <form action="" className='row w-100 p-0 gx-0 gy-3'>
                                                    <div className='col-12'>
                                                        <label htmlFor="" className='form-label fs-15'>Username</label>
                                                        <input type="text" className='form-control rounded-0 border-dark' />
                                                    </div>
                                                    <div className='col-12'>
                                                        <label htmlFor="" className='form-label fs-15'>Password</label>
                                                        <input type="text" className='form-control rounded-0 border-dark' />
                                                    </div>
                                                    <button type="" className='col-12 fs-15 fw-bold border-0 btn-bg-color text-light py-2 rounded-0 sign-in-btn'>SIGN IN</button>
                                                    <div className='col-12 text-end'>
                                                        <a href="#" className='fs-13 text-decoration-none'>Forgot Password?</a>
                                                    </div>
                                                </form>
                                                <div>
                                                    <div className='fs-13 text-center'>Don't have an account?<button data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" className="btn bg-transparent border-0 fs-13 text-primary fw-500  px-1">Create One</button></div>
                                                    <div className='text-center mb-2'><a href="#" className='text-decoration-none fs-14 '>or sign in with</a></div>
                                                    <div className='d-flex justify-content-center mb-3'>
                                                        <button className='border-0 bg-grey rounded-1 p-2 fs-14 d-flex gap-2 align-items-center'><img src={Google} style={{ height: "20px", background: "transparent" }} alt="" /> Sign In With Google</button>
                                                    </div>
                                                    <div className='d-flex justify-content-center'>
                                                        <button className='border-0 bg-grey rounded-1 p-2 fs-14 d-flex gap-2 align-items-center'>
                                                            <i className='fa-brands fa-facebook-f rounded-circle' style={{
                                                                border: " 2px solid",
                                                                height: "22px",
                                                                width: "22px",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center"
                                                                , fontSize: "13px"
                                                            }}></i>
                                                            Sign In With Facebook</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <img src={SigninImg} className='w-100 h-100' alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div>
                                            <div className="text-dark row p-0 g-0">
                                                <div className="col-6 py-5 px-3">
                                                    <div className='text-center mb-4'>
                                                        <img src={SigninLogo} className='w-50 m-auto ' alt="" />
                                                    </div>
                                                    <form action="" className='row w-100 p-0 gx-0 gy-0'>
                                                        <div className='col-12 '>
                                                            <label htmlFor="" className='form-label fs-15 mb-1'>Username</label>
                                                            <div className='input-group'>

                                                                <input type="text" className='form-control rounded-0 border-dark' placeholder='first name' />
                                                                <input type="text" className='form-control rounded-0 border-dark' placeholder='last name' />
                                                            </div>
                                                        </div>
                                                        <div className='col-12'>
                                                            <label htmlFor="" className='form-label fs-15 mb-1'>Phone Number</label>
                                                            <input type="text" className='form-control rounded-0 border-dark' />
                                                        </div>
                                                        <div className='col-12'>
                                                            <label htmlFor="" className='form-label fs-15 mb-1'>Email</label>
                                                            <input type="text" className='form-control rounded-0 border-dark' />
                                                        </div>
                                                        <div className='col-12'>
                                                            <label htmlFor="" className='form-label fs-15 mb-1'>Password</label>
                                                            <input type="text" className='form-control rounded-0 border-dark' />
                                                        </div>
                                                        <div className='col-12'>
                                                            <label htmlFor="" className='form-label fs-15 mb-1'>Confirm Password</label>
                                                            <input type="text" className='form-control rounded-0 border-dark' />
                                                        </div>
                                                        <button type="" className='col-12 mt-2 fs-15 fw-bold border-0 btn-bg-color text-light py-2 rounded-0 sign-in-btn'>REGISTER</button>
                                                        <div className='col-12 text-center'>
                                                            <a href="#" className='fs-12 text-decoration-none text-dark'>Already have an account?
                                                                <button className="btn bg-transparent px-1 text-primary fw-500 fs-12" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" type='button'>Sign in </button>


                                                            </a>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="col-6">
                                                    <img src={SigninImg} className='w-100 h-100' alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="navbar-toggler d-block d-xl-none text-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                    <div className="offcanvas d-block offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{ background: "#DDDDDD" }}>
                        <div className="offcanvas-header d-block">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body" >
                            <ul className='d-flex gap-3 flex-column mb-0 responsive-pages-links'>
                                {linksList.map((link, key) => (
                                    <li key={key} className='list-group-item fs-15 border-bottom border-light pb-1'>
                                        <NavLink className='text-decoration-none d-flex flex-column nav-title text-dark fw-600 fs-14' to={link.route}><p className='mb-0'>{link.title}</p>
                                            <div className='position-relative'>
                                                <span className="start-0  bottom-0 w-0  hover-line position-absolute"></span>
                                            </div>
                                        </NavLink>

                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav >
        </>
    );
}

export default Pagesnav;
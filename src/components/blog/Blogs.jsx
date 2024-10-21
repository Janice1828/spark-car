import React from 'react'
import { Link } from 'react-router-dom'
const Blogs = ({ blogList }) => {
    return (
        <div className="col-12 row ">
            {blogList.map((blog) => (
                <div key={blog.id} className='col-lg-6 card border-0 position-relative'>
                    <div className="card-head">
                        <div className='w-fit-content'>
                            <h4 className='rounded-2 py-1 px-2 btn-bg-color text-center text-light fw-bold position-absolute'>16<br /> <span className='fw-400' style={{ fontSize: "20px" }}>Sep</span></h4>
                        </div>
                        <img src={blog.img} alt="Image" className='w-100' />
                    </div>
                    <div className="card-body blog-card-body rounded-2 w-90 m-auto " style={{
                        transform: "translateY(-60px)",
                        zIndex: "100",
                        background: "white",
                        padding: "20px 30px"
                    }}>
                        <Link to={`/blog-details?id=${blog.title}`} className='text-decoration-none text-dark'>
                            <h5 className='fw-600 my-3 blogs-title ' style={{ letterSpacing: "-1px", lineHeight: "30px" }}>{blog.title}</h5>
                        </Link>
                        <p className='fs-14 lh-lg text-grey' >{blog.content}
                        </p>
                        <div>
                            <button className='btn-bg-color px-4 py-2 fs-14 border-0 rounded-1 text-light fw-600'>Read More</button>
                        </div>
                    </div>
                </div >
            ))}
        </div>
    )
}

export default Blogs
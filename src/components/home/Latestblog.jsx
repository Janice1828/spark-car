import React from 'react'

const Latestblog = ({ blogs }) => {

    return (
        <div className='mt-5 mb-5' style={{ height: "550px" }}>
            <h2 className='home-headings pt-5'>Latest Blogs</h2>
            <div className='d-flex gap-2 justify-content-center'>
                {blogs.map((blog, key) => (
                    <div key={key} className='card position-relative bg-transparent border-0'>
                        <div className='card-header bg-transparent border-0'>
                            <h5 className='btn-bg-color text-light fw-600 d-flex align-items-center text-center py-2 position-absolute' style={{ width: "60px" }}>{blog.postedDate}</h5>
                            <div style={{ width: "350px" }}>
                                <img src={blog.img} alt="" className='w-100 h-100' />

                            </div>
                        </div>
                        <div className="card-body position-absolute" style={{
                            background: "#fff",
                            top: "200px",
                            width: "90%",
                            borderRadius: "10px",
                            left: "5%",
                        }}>
                            <h6 className='fw-bold w-100'>{blog.title}</h6>
                            <p className='fs-15 fw-500 lh-lg text-grey w-100'  >{blog.content}</p>
                            <a href="#" className="btn btn-success btn-bg-color text-light  border-0 rounded-1 fw-600 fs-14 px-4 py-2">Read More</a>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Latestblog
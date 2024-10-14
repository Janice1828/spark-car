import React from 'react'
const Latestblog = ({ blogs }) => {
    return (
        <div className='mt-sm-5 mb-sm-5'>
            <h2 className='home-headings pt-5'>Latest Blogs</h2>
            <div className='d-flex gap-2 justify-content-center flex-wrap flex-xl-nowrap'>
                {blogs.map((blog, key) => (
                    <div key={key} className='card  bg-transparent border-0'>
                        <div className='card-header bg-transparent border-0'>
                            <h5 className='btn-bg-color text-light fw-600 d-flex align-items-center text-center py-2 position-absolute' style={{ width: "60px" }}>{blog.postedDate}</h5>
                            <div>
                                <img src={blog.img} alt="" className='img-fluid' />
                            </div>
                        </div>
                        <div className="card-body m-auto" style={{
                            background: "#fff",
                            width: "90%",
                            borderRadius: "10px",
                            transform: "translateY(-20px)"
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
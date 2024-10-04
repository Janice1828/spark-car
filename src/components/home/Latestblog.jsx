import React from 'react'

const Latestblog = ({ blogs }) => {

    return (
        <div>
            <h4>Latestblog</h4>
            <div className='d-flex'>
                {blogs.map((blog, key) => (
                    <div key={key} className='card'>
                        <div className='card-header'>
                            <h5>{blog.postedDate}</h5>
                            <img src={blog.img} alt="" />
                        </div>
                        <div className="card-body">
                            <h5 className='fw-600'>{blog.title}</h5>
                            <p className='fw-400'>{blog.content}</p>
                            <a href="#" className="btn btn-success btn-bg-color text-light  border-0 rounded-1 fw-600 fs-14">Read More</a>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Latestblog
import React from 'react'

const Latestblog = ({ blogs }) => {

    return (
        <div>
            <h4>Latestblog</h4>
            <div>
                {blogs.map((blog, key) => (
                    <div key={key} className='card'>
                        <div className='card-header'>
                            <h5>{blog.postedDate}</h5>
                            <img src={blog.img} alt="" />
                        </div>
                        <div className="card-body">
                            <h5>{blog.title}</h5>
                            <p>{blog.content}</p>
                            <a href="#" className="btn btn-success">Read More</a>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Latestblog
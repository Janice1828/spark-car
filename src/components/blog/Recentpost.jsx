import React from 'react'
import { Link } from 'react-router-dom';
const Recentpost = ({ posts }) => {
    const displayingPosts = posts.slice(0, 5);
    return (
        <div>
            <h5 className='fw-600 mb-4'>
                Recent Posts
            </h5>
            <div className="d-flex gap-1 flex-column">
                {displayingPosts.map((post, key) => (
                    <Link key={key} to={`/blog-details?id=${post.title}`} className='text-decoration-none text-dark' >
                        <div className='border-bottom d-flex gap-3'>
                            <img src={post.img} alt="" height={50} width={50} />
                            <div>
                                <h6 className='fw-600 fs-15' style={{ lineHeight: "25px" }}>{post.title}</h6>
                                <p className=' text-grey d-flex align-items-center gap-2'>
                                    <i className='fs-14 fa-regular fa-calendar text-success'></i>
                                    <span style={{ fontSize: "12px" }}>Mon Sep 16 2024</span>
                                </p>
                            </div>
                        </div></Link>
                ))}
            </div>
        </div>
    )
}

export default Recentpost
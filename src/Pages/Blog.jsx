import React from 'react'
import Pagesnav from '../components/nav/Pagesnav'
import Blogs from '../components/blog/Blogs'
import Recentpost from '../components/blog/Recentpost'
import Footer from '../components/nav/Footer'
import Contactsnav from '../components/nav/Contactsnav'
import Populartags from '../components/blog/Populartags'
const Blog = () => {
    return (
        <div className='blog-container'>
            <Contactsnav />
            <div className="blog-bg-img">
                <div className="px-md-6">
                    <Pagesnav />
                </div>
            </div>
            <div className="row px-md-6 gx-0 mt-4 pb-5 mb-5">
                <div className="col-8">
                    <Blogs />
                </div>
                <div className="col-4">
                    <Recentpost />
                    <Populartags />
                </div>
            </div>
            <div className="px-md-6 bg-opacity-100" style={{ background: "#000" }}>
                <Footer />
            </div>

        </div>
    )
}

export default Blog
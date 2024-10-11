import React, { useEffect, useState } from 'react'
import Pagesnav from '../components/nav/Pagesnav'
import Blogs from '../components/blog/Blogs'
import Recentpost from '../components/blog/Recentpost'
import Footer from '../components/nav/Footer'
import Contactsnav from '../components/nav/Contactsnav'
import Populartags from '../components/blog/Populartags'
import axios from 'axios'
const Blog = () => {
    const [blogs, setBlogs] = useState([])
    const [displayingBlogs, setDisplayingBlogs] = useState([]);
    const [tagsList, setTagsList] = useState([])
    useEffect(() => {
        fetch("blogs.json").then((response) => response.json()).then((data) => {
            setBlogs(data)
            setDisplayingBlogs(data)
        })
        axios.get("blogs-tags.json").then((data) => setTagsList(data.data))
    }, [])
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
                    <Blogs blogList={displayingBlogs} />
                </div>
                <div className="col-4">
                    <Recentpost posts={blogs} />
                    <Populartags tags={tagsList} blogList={blogs} blogsUpdate={setDisplayingBlogs} />
                </div>
            </div>
            <div className="px-md-6 bg-opacity-100" style={{ background: "#000" }}>
                <Footer />
            </div>

        </div>
    )
}

export default Blog
import React, { useEffect, useState } from 'react'
import Contactsnav from '../nav/Contactsnav';
import Pagesnav from '../nav/Pagesnav';
import Footer from '../nav/Footer';
import axios from 'axios';
import Recentpost from './Recentpost';
const Blogdetails = () => {
    const search = location.search;
    const params = new URLSearchParams(search)
    const uniqueValue = params.get("id")
    const [fetchedBlog, setFetchedBlog] = useState([])
    const [tags, setTags] = useState([])
    useEffect(() => {
        axios.get("blogs.json").then((data) => {
            setFetchedBlog(data.data)
        })
    }, [])
    let displayingArr = fetchedBlog.filter((blog) => {
        return blog.title == uniqueValue ? blog : ''
    })
    let [displayingData] = displayingArr;
    return (
        <div className='blog-detail-container'>
            <Contactsnav />
            <div className='blog-detail-img container mb-5'>
                <img className='w-100' src={displayingArr.length > 0 ? displayingData.img : ' '} alt="" />
            </div>
            <div className="px-md-6 mx-5 mb-5">
                <div className="row">
                    <div className="col-xl-8">
                        <h4 className='fw-600' style={{ letterSpacing: "-1px" }}>
                            {displayingArr.length > 0 ? displayingData.title : ' '}
                        </h4>
                        <p className='mt-3 lh-lg fs-15 text-grey'>
                            {displayingArr.length > 0 ? displayingData.content : ' '}
                        </p>
                    </div>
                    <div className="col-xl-4">
                        <Recentpost posts={fetchedBlog} />
                    </div>
                </div>
            </div>
            <div className="px-md-6 bg-opacity-100" style={{ background: "#000" }}>
                <Footer />
            </div>
        </div>
    )
}
export default Blogdetails
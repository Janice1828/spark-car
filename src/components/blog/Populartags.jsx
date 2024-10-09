import React from 'react'

const Populartags = ({ tags, blogList, blogsUpdate }) => {
    const filterBlogs = () => {
        const tagFilterData = blogList.filter((blog) => {
            const currentBtn = event.target.id.toLowerCase();
            let blogTitle = blog.title.toLowerCase();
            if (blogTitle.includes(currentBtn)) {
                return blog;
            }
        })
        // blogsUpdate(filterBlogs)
    }
    return (
        <div className='mt-5 pt-3'>
            <h5 className='fw-600 mb-4' style={{ letterSpacing: "-1px" }}>
                Popular Tags
            </h5>
            <div className='d-flex flex-column gap-1'>
                {tags.map((tag, key) => (
                    <div key={key}>
                        <button onClick={filterBlogs} id={tag} style={{ background: "#54B435", boxShadow: "0 2px 5px 0 rgba(0,0,0,.2),0 2px 10px 0 rgba(0,0,0,.1)" }} className='fs-12 btn border-0 fw-600 text-light px-3 rounded-1'>{tag}</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Populartags
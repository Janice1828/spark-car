import React from 'react'

const Pagination = ({ blogs, itemsPerPage, updateCurrentPage, currentIndex }) => {
    const pagesList = [];
    const totalPages = Math.ceil(blogs.length / itemsPerPage)
    for (let i = 1; i <= totalPages; i++) {
        pagesList.push(i);
    }
    const updatePage = (id) => {
        updateCurrentPage(id)
    }
    const prevBlog = () => {
        currentIndex > 1 ? updateCurrentPage(currentIndex - 1) : currentIndex
    }
    const nextBlog = () => {
        // console.log(pagesList.length)
        currentIndex < pagesList.length ? updateCurrentPage(currentIndex + 1) : currentIndex
    }
    return (
        <div className='d-flex justify-content-center'>
            <div className="btn-group">
                <button className='btn btn-light border-1 border-grey fs-14 fw-500' onClick={prevBlog}>&lt;</button>
                {pagesList.map((page) => (
                    <button key={page} className='btn btn-light border-1 border-grey fs-14 fw-500' onClick={() => { updatePage(page) }}>{page}</button>
                ))}
                <button className='btn btn-light border-1 border-grey fs-14 fw-500' onClick={nextBlog} >&gt;</button>
            </div>
        </div>
    )
}

export default Pagination
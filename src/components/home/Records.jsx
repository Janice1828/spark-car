import React from 'react'

const Records = ({ records }) => {
    return (
        <>
            <div className='mb-3'>
                <h3 className='fw-600' style={{ letterSpacing: "-3px" }}>
                    We offer customers a diverse fleet of <span style={{ color: "#1ecb15", fontWeight: "600" }}>commercial and<br /> luxury cars</span> customized to suit any requirements.
                </h3>
            </div >
            <div className='row gy-2'>
                {records.map((record, key) => (
                    <div className='card col-xl-3 col-6 px-3 bg-transparent border-0 outline-0' key={key} >
                        <div style={{ background: "rgba(255, 255, 255, .22)" }} className='d-flex justify-content-center py-xl-4 py-3'>
                            <div className='text-center'>
                                <h1 className='fw-600' style={{ color: "#1ecb15" }}>{record.count}</h1>
                                <p className='text-light'>{record.title}</p>
                            </div>
                        </div>

                    </div>
                ))}
            </div >
        </>
    )
}

export default Records
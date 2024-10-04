import React from 'react'

const Whysparkcar = ({ benefitsList }) => {

    return (
        <>
            <div className='row my-5'>
                <div className="col-12 mb-4"><h3 className='fw-600 text-center'>Why Spark car?</h3></div>
                {benefitsList.map((benefit, key) => (
                    <div key={key} className='col-6'>
                        <i></i>
                        <div>
                            <h6 className='fw-600'>{benefit.title}</h6>
                            <p>
                                {benefit.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div ></>
    )
}

export default Whysparkcar
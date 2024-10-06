import React from 'react'

const Whysparkcar = ({ benefitsList }) => {

    return (
        <>
            <div className='row my-5'>
                <div className="col-12 mb-4"><h2 className='home-headings'>Why Spark car?</h2></div>
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
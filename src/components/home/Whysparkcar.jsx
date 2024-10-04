import React from 'react'

const Whysparkcar = ({ benefitsList }) => {

    return (
        <>
            <div className='row'>
                {benefitsList.map((benefit, key) => (
                    <div key={key}>
                        <i></i>
                        <div>
                            <h5>{benefit.title}</h5>
                            <p>
                                {benefit.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div></>
    )
}

export default Whysparkcar
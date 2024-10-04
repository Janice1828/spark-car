import React from 'react'

const Adventure = () => {
    const servicesList = [
        {
            icon: "",
            title: "First Class Services",
            content: "Where luxury meets exceptional care, creating unforgettable moments and exceeding your every expectation."
        },
        {
            icon: "",
            title: "24/7 Customer Service",
            content: "Reliable support when you need it most, keeping you on the move with confidence and peace of mind."

        },
        {
            icon: "",
            title: "Pick-Up & Drop-Off",
            content: "Enjoy pickup and drop-off services, adding an extra layer of ease to your car rental experience."
        }
    ]
    return (
        <div className='row'>
            <div>
                <h2>Let Your Adventure Begin
                </h2>
            </div>
            <div>
                <i>Icon</i>
                <p></p>
            </div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Adventure
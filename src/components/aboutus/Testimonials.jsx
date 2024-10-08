import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
const Testimonials = ({ testimonialsList }) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='pt-4 pb-5'>
            <h4 className='fw-600 text-center mb-4' style={{ fontSize: "28px", letterSpacing: "-2px" }}>Testimonials</h4>
            <Carousel responsive={responsive} infinite={true} autoPlay={true}
            >
                {testimonialsList.map((testimonial, key) => (
                    <div key={key} className="card p-2 h-100" style={{ background: "aliceblue", boxShadow: "3px 3px 9px rgba(164, 164, 186, 0.2)", border: "1px solid  #dddddd" }}>
                        <div className="card-body bg-light">
                            <div className='text-center'>
                                <img src={testimonial.img} alt="" className='text-center rounded-circle' style={{ height: "100px" }} />
                            </div>
                            <strong className='d-block text-center fw-bold mt-4 fs-15'>{testimonial.name}</strong>
                            <strong className='d-block text-center fw-bold mb-2 fs-15'>{testimonial.profession}</strong>
                            <p className='text-center text-grey fs-14 lh-lg mb-5 pb-3'>{testimonial.review}</p>
                        </div>
                    </div>
                ))}
            </Carousel>

        </div>
    )
}

export default Testimonials
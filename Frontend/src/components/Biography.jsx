import React from 'react'

const Biography = ({imageUrl}) =>{
    return(
        <div className='container biography'>
            <div className="banner">
                <img src={imageUrl} alt="aboutImg"/>
            </div>
            <div className="banner">
                <p>Biography</p>
                <h3>Who We Are</h3>
                <p>
                At MediCare Medical Institute, we excel in providing unmatched healthcare services with precision and care. Our team, driven by a deep commitment to patient well-being, navigates the complexities of medical treatments with expertise.
                Whether addressing routine check-ups or complex procedures, we ensure each patient's journey is marked by compassionate care, advanced technology, and an unwavering dedication to health and healing.
                </p>
                <p>Welcome to MediCare Medical Institute in 2024!</p>
                <p>We are dedicated to advancing healthcare with the latest innovations.</p>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Our commitment to excellence drives us to provide top-tier medical services with precision and care. Whether you're seeking routine check-ups or advanced medical treatments, our team is here to ensure your well-being every step of the way. At MediCare, we combine expertise with empathy, delivering personalized care in a state-of-the-art environment.
                </p>
                <p>Lorem ipsum dolor sit amet!</p>
                <p>Your health, our priority!</p>
            </div>
        </div>
    )
}

export default Biography;
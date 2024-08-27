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
                At MediCare Medical Institute, we are dedicated to delivering exceptional healthcare with precision and compassion.</p>
                <p>Our expert team is committed to ensuring every patient receives personalized care, whether for routine check-ups or advanced treatments.</p>
                <p>We blend cutting-edge technology with a deep commitment to health and healing.</p>
                <p>Welcome to MediCare Medical Institute in 2024</p>
                <p>where your health is our priority!</p>
            </div>
        </div>
    )
}

export default Biography;
import React from 'react'

const Heroo = ({title,imageUrl}) =>{
    return(
        <div className='hero container'>
            <div className="banner">
                <h1>{title}</h1>
                <p>
                MediCare Medical Institute is a leading healthcare facility focused on providing exceptional medical care with a patient-centered approach. 
                Our dedicated team of professionals is committed to delivering high-quality, personalized treatments that cater to the unique needs of each individual.
                At MediCare, we strive to create a supportive and healing environment, ensuring a seamless path to recovery and overall well-being. 
                </p>
            </div>
            <div className="banner">
                <img src={imageUrl} alt="hero" className='animated.image'/>
                <span>
                    <img src='/Vector.png' alt='vector'/>
                </span>
            </div>
        </div>
    )
}

export default Heroo;
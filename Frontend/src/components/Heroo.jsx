import React from 'react'

const Heroo = ({title,imageUrl}) =>{
    return(
        <div className='hero container'>
            <div className="banner">
                <h1>{title}</h1>
                <p>
                MediCare Medical Institute is a premier healthcare facility dedicated to delivering personalized, 
                <br></br>high-quality care.
                <br></br>Our team focuses on creating a supportive environment that ensures a smooth path to recovery and well-being.
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
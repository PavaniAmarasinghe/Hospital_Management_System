import React from "react";
import Heroo from "../components/Heroo";
import Biography from "../components/Biography";

const AboutUs = () =>{
    return(
        <>
        <Heroo title={"Learn More About us|MediCare Medical institute"} imageUrl={"/about.png"}/>
        <Biography imageUrl={"/whoweare.png"}/>
        </>
    )
}

export default AboutUs;
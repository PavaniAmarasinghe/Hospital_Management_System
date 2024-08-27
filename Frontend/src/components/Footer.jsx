import React from "react";
import { Link } from "react-router-dom";
import {FaPhone,FaLocationArrow} from "react-icons/fa";
import {MdEmail} from "react-icons/md"

const Footer = () => {
    const hours = [
        {
          id: 1,
          day: "Monday",
          time: "9:00 AM - 11:00 PM",
        },
        {
          id: 2,
          day: "Tuesday",
          time: "12:00 PM - 12:00 AM",
        },
        {
          id: 3,
          day: "Wednesday",
          time: "10:00 AM - 10:00 PM",
        },
        {
          id: 4,
          day: "Thursday",
          time: "9:00 AM - 9:00 PM",
        },
        {
          id: 5,
          day: "Monday",
          time: "3:00 PM - 9:00 PM",
        },
        {
          id: 6,
          day: "Saturday",
          time: "9:00 AM - 3:00 PM",
        },
      ];
    return(
        <>
        <footer className="container">
            <hr/>
            <div className="content">
                <div>
                    <img src="logo.png" alt="logo" className="logo.img" />
                </div>
                <div>
                    <h4>Quick Links</h4>
                    <ul>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/appointment"}>Appointment</Link>
                        <Link to={"/about"}>About</Link>
                    </ul>
                </div>
                <div>
                    <h4>Hours</h4>
                    {
                    hours.map((element) => {
                        return(
                            <li key={element.id}>
                        <span>{element.day}</span>
                        <span>{element.time}</span>
                    </li>
                        );
                    }
                    )} 
                    </div>
                    <div>
                        <h4>Contact</h4>
                        <div>
                            <FaPhone/>
                            <span>027-2222-322</span>
                        </div>
                        <div>
                            <MdEmail/>
                            <span>Mcare22@gmail.com</span>
                        </div>
                        <div>
                            <FaLocationArrow/>
                            <span>Colombo<br>
                            </br>Sri Lanka</span>
                        </div>
                    </div>
                </div>    
        </footer>
        </>

    )
}
export default Footer;
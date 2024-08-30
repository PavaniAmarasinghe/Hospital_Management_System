import React, { useContext, useState } from 'react';
import {Link,useNavigate} from "react-router-dom";
import {Context} from "../main";
import axios from 'axios';
import { toast } from 'react-toastify';
import { GiHamburgerMenu} from 'react-icons/gi';

const Navbar = () => {
    const[show, setShow] = useState(false);
    const{isAuthenticated,setIsAuthenticated} = useContext(Context);

    const navigateTo = useNavigate();
    
    const handleLogout = async()=>{
        await axios.get("http://localhost:4000/api/v1/user/patient/logout",{withCredentials:true}

        ).then((res) => {
            toast.success(res.data.message);
            setIsAuthenticated(false);
        })
        .catch((err) => {
            toast.error(err.response.data.message);
        });
        
    };
  

    const goToLogin = ()=>{
        navigateTo("/login");
    };


    return(
        <nav className='container'>
            <div className="logo">MediCare</div>
            
            <div className={show? "navLinks showmenu":"navLinks"}>
                <div className="links">
                    <Link to={"/"}>HOME</Link>
                    <Link to={"/appointment"}>APPOINTMENT</Link>
                    <Link to={"/about"}>ABOUT US</Link>
                
                </div>
                {isAuthenticated ? (<button className="logoutBtn btn" onClick={handleLogout}>LOGOUT</button>) : (<button className="loginBtn btn" onClick={goToLogin}>LOGIN</button>)}
                <GiHamburgerMenu/>
                </div>
            <div className='hamburger' onClick={()=>setShow(!show)}></div>
        </nav>
    )
}
export default Navbar;
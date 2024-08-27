import React, { useContext, useEffect } from "react"
import "./App.css"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Appointment from "./pages/Appointment.jsx";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar.jsx";
import { Context } from "./main.jsx";
import Footer from "./components/Footer.jsx";

const App = () =>{
  const {isAuthenticated,setIsAuthenticated,setUser} = useContext(Context);
  useEffect(()=>{
    const fetchUser =async() =>{
      try {
        const response = await axios.get("http://localhost:4000/api/v1/user/patient/me",{withCredentials:true});
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser()
  },[isAuthenticated]);
  return(
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/appointment' element={<Appointment/>}/>
      </Routes>
      <Footer/>
      <ToastContainer position="top-center"/>
    </Router>

    </>
  )
}
export default App;
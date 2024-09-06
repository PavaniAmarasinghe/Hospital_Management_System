import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () =>{
    const { isAuthenticated, setIsAuthenticated } = useContext(Context);
    
    const [appointments,setAppointments] = useState([]);

    useEffect (()=>{
        const fetchAppointments = async()=>{
           try {
            const {data} = await axios.get("http://localhost:4000/api/v1/appointment/getall",{withCredentials:true});
            setAppointments(data.appointments)
        } 
           catch (error) {
            setAppointments({});
            console.log("Some Erooe Occured While Fetching Apoinments",error);
           } 
        };
        fetchAppointments();
    },[]);
    
    
    if(!isAuthenticated){
        return<Navigate to = {"/login"}/>;
    }
   

    return(
        <div>

        </div>
    )
}
export default Dashboard;
import React from "react";
import AppointmentForm from "../components/AppointmentForm";
import Heroo from "../components/Heroo";

const Appointment = () => {
    return (
        <>
          <Heroo 
            title={"Schedule Your Appointment | MediCare Medical Institute"}
            imageUrl={"/signin.png"}
          />
          <AppointmentForm />
        </>
    );
};

export default Appointment;

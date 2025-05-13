import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DoctorContext = createContext();

export const DoctorProvider=({ children }) => {
    const[doctors, setDoctors] = useState([]);

    const fetchDoctors = async () => {
        try {
            const response = await axios.get('http://localhost:5014/api/doctors/all-doctors');
            setDoctors(response.data)
        } catch (error) {
            console.log('Failed to fetch doctors', error);
        }
    };

    useEffect(()=>{
        fetchDoctors();
    },[]);

    const addDoctor = async (doctorData) =>{
        try {
            await axios.post('http://localhost:5014/api/doctors/add-doctor', doctorData);
            fetchDoctors();
        } catch (error) {
            console.log('Failed to add doctor', error);
        }
    };

    const doctorRemove = async (doctorId) => {
        try {
            await axios.delete(`http://localhost:5014/api/doctors/delete/${doctorId}`);
            fetchDoctors()
        } catch (error) {
            console.log('Failed to remove doctor', error);
        }
    }

    return(
        <DoctorContext.Provider value={{ doctors,addDoctor,doctorRemove }}>
            {children}
        </DoctorContext.Provider>
    );
};
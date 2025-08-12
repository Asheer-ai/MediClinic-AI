import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';




// Create context
const PrescriptionContext = createContext();

// Provider component
    export const PrescriptionProvider = ({ children }) => {
        const navigate=useNavigate();
    const [prescriptions, setPrescriptions] = useState([]);
    const [selectedPrescription, setSelectedPrescription] = useState(null);

    const [formValues, setFormValues] = useState({
        patientDetails: { name: '', age: '', vitals: { pressure: '', temperature: '', oxygenLevel: '' } },
        diseaseName: '',
        symptoms: '',
        treatment: '',
        medicine: [{ name: '', dosage: '' }], // Initial empty object
        test: [],
    });

    // Fetch previous prescriptions of the patient
        const fetchPrescriptions = async (userId, doctorId) => {
        try {
        const response = await axios.get(`https://mediclinic-ai.onrender.com/api/admin/prescriptions/user/${userId}/doctor/${doctorId}`);
        setPrescriptions(response.data);
        } catch (error) {
        console.error('Error fetching prescriptions:', error);
        }
    };

    // Submit new prescription
        const submitPrescription = async (data) => {
        try {

            const res = await axios.post('https://mediclinic-ai.onrender.com/api/admin/prescriptions', data);
            toast.success('Prescription saved!');
            navigate(-1); // <-- move navigation here
        } catch (err) {
            toast.error('Error saving prescription');
            console.error(err);
        }
        };

    const handleSelectPrescription = (prescription) => {
    setSelectedPrescription(prescription);
    // Update formValues only if a prescription is selected
        if (prescription) {
        setFormValues({
            ...formValues,
            patientDetails: {
            name: prescription.patientDetails.name,
            age: prescription.patientDetails.age,
            vitals: {
                pressure: prescription.patientDetails.vitals.pressure,
                temperature: prescription.patientDetails.vitals.temperature,
                oxygenLevel: prescription.patientDetails.vitals.oxygenLevel,
            },
            },
            diseaseName: prescription.diseaseName,
            symptoms: prescription.symptoms,
            treatment: prescription.treatment,
            medicine: prescription.medicine || [], // Use existing medicine if present
            test: prescription.test || [],
        });
        }
    };
    return (
        <PrescriptionContext.Provider value={{ prescriptions, selectedPrescription, handleSelectPrescription, fetchPrescriptions, formValues, setFormValues, submitPrescription, }}>
            {children}
        </PrescriptionContext.Provider>
    );
};

// Hook to use context
export const usePrescriptionContext = () => useContext(PrescriptionContext);
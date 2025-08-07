import PrescriptionsCards from '@/components/customs/PrescriptionsCards';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Prescription() {
    const [prescriptions, setPrescriptions] = useState([]);
    const userId = JSON.parse(localStorage.getItem('userInfo'))._id;

    useEffect(() => {
        const fetchPrescriptions = async () => {
            try {
                const response = await axios.get(`http://localhost:5014/api/admin/prescriptions/${userId}`);
                console.log("prescription ", response);
                setPrescriptions(response.data);
            } catch (error) {
                console.error('Error fetching prescriptions:', error);
            }
        };

        fetchPrescriptions();
    }, [userId]);

    const handleExternalRedirect = () => {
        window.open("https://visualmedicalassistant.streamlit.app/", "_blank");
    };

    return (
        <div className='w-full px-3 py-5'>
            <div className='w-full flex flex-col items-center'>
                <h1 className='text-4xl font-kameron font-semibold text-[#1B4965]'>
                    Your Digital Prescriptions
                </h1>
            </div>

            <div className='w-full mt-6 rounded-lg bg-white max-h-[30rem] overflow-y-auto shadow-lg'>
                <PrescriptionsCards prescriptions={prescriptions} />
            </div>

            <div className='w-full flex flex-col items-center mt-10'>
                <h2 className='text-2xl font-semibold text-[#1B4965] mb-2'>
                    Need to analyze your X-Ray, USG, or lab report?
                </h2>
                <p className='text-center text-gray-600 mb-4 max-w-2xl'>
                    Use our Visual Medical Assistant tool to get AI-powered insights from your medical images and reports.
                </p>
                <button
                    onClick={handleExternalRedirect}
                    className='bg-[#1B4965] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#123c57] transition'
                >
                    Go to Report Analyzer
                </button>
            </div>
        </div>
    );
}

export default Prescription;

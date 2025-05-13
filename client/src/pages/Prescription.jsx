import PrescriptionsCards from '@/components/customs/PrescriptionsCards';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Prescription() {
    const [prescriptions, setPrescriptions] = useState([]);
    const userId = JSON.parse(localStorage.getItem('userInfo'))._id;

    useEffect(()=>{
        const fetchPrescriptions = async () => {
            try {
                const response = await axios.get(`http://localhost:5014/api/admin/prescriptions/${userId}`)
                console.log("prescription ",response);
                setPrescriptions(response.data);
            } catch (error) {
                console.error('Error fetching prescriptions:', error);
            }
        };

        fetchPrescriptions();
    },[userId]);


  return (
    <div className='w-full px-3 h-full'>
        <div className='w-full flex flex-col items-center py-5'>
            <h1 className='text-4xl font-kameron font-semibold text-[#1B4965]'>Your Digital Prescriptions</h1>
        </div>
        <div className='w-full rounded-lg bg-white h-[30rem] overflow-y-scroll shadow-lg'>
            <PrescriptionsCards prescriptions={prescriptions}/>
        </div>
    </div>
  )
}

export default Prescription
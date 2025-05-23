import React, { useContext, useState } from 'react'
import Btn from './smallComponents/Btn';
import { Link } from 'react-router-dom';
import { DoctorContext } from '@/context/DoctorContext';

// const doctorsData = [
//   { id: 1, name: "Dr. John Smith", speciality: "Cardiologist", image: "/face.png" },
//   { id: 2, name: "Dr. Emma Johnson", speciality: "Gynecologist", image: "/face.png" },
//   { id: 3, name: "Dr. James Lee", speciality: "Dermatologist", image: "/face.png" },
//   { id: 4, name: "Dr. Emily Davis", speciality: "Cardiologist", image: "/face.png" },
//   { id: 5, name: "Dr. Michael Brown", speciality: "Orthopedist", image: "/face.png" },
//   { id: 6, name: "Dr. Sarah Miller", speciality: "Gynecologist", image: "/face.png" },
// ];

const specialties = ["All", "Cardiologist", "Gynecologist", "Dermatologist", "Orthopedist","Surgeon","General Physicians"];

function DoctorCards() {
  const { doctors } = useContext(DoctorContext);
    const [selectedSpecialty, setSelectedSpecialty] = useState("All");

    const filterDoctors = () => {
    if (selectedSpecialty === "All") {
      return doctors; // Use the doctors from context
    }
    
    return doctors.filter(doctor => doctor.speciality === selectedSpecialty);

    };

  return (
    <>
    <div className="flex mb-6 space-x-4 sticky top-0 backdrop-blur-lg p-3">
        {specialties.map((specialty, index)=>(
            <button
            key={index}
            onClick={() => setSelectedSpecialty(specialty)}
            className={`px-4 py-2 rounded-lg font-semibold focus:outline-none ${selectedSpecialty === specialty ? 'bg-[#1b4965] text-white' : 'bg-gray-200 text-gray-700'}`}
            >
                {specialty}
            </button>
        ))}
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-3">
        {filterDoctors().map((doctor)=>(<div key={doctor._id} className="doctor-card p-4 rounded-lg bg-[#F0F4F8]">
            <img
            src={doctor.image}
            alt={doctor.name}
            className="w-24 h-24 rounded-full mx-auto mb-4 bg-[#1b4965]"
            />
            <h3 className="text-lg font-semibold text-center">{doctor.name}</h3>
            <p className="text-center text-gray-500 mb-4">{doctor.speciality}</p>
            <div className="text-center">
                <Link to={`/appointment/${doctor._id}`}>
                    <Btn text={'Book Appointment'} />
                </Link>
            </div>
        </div>
    ))}
    </div>
    </>
  )
}

export default DoctorCards
import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';

function PrescriptionsCards({prescriptions}) {
    const downloadPrescription = (prescription) => {
    const content = `
      <div style="padding: 20px; font-family: Arial, sans-serif;">
        <h2 style="color: #1B4965;">Dr. ${prescription.doctor.name}</h2>
        <p><strong>Date:</strong> ${new Date(prescription.date).toLocaleDateString()}</p>
        <p><strong>Disease:</strong> ${prescription.diseaseName}</p>
        <p><strong>Symptoms:</strong> ${prescription.symptoms}</p>
        <p><strong>Medicines:</strong></p>
        <ul>
          ${prescription.medicine.map(med => `<li>${med.name} - ${med.dosage}</li>`).join('')}
        </ul>
        <p><strong>Tests:</strong></p>
        <ul>
          ${prescription.test.map(test => `<li>${test}</li>`).join('')}
        </ul>
      </div>
    `;

    const opt = {
      margin: 0.5,
      filename: `prescription-${prescription.doctor.name}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(content).save();
  };
  return (
    <div className="p-4 flex flex-col gap-4">
        {prescriptions.map((prescription)=>(
            <div key={prescription._id} className="flex items-center justify-between bg-[#F0F4F8] shadow-lg p-4 rounded-lg ">
                 {/* Cover Image */}
                <div className="w-24 h-24">
                    <img src={prescription.doctor.image} alt="Prescription" className="w-full h-full rounded-md object-cover" />
                </div>
                {/* Prescription Details */}
                <div className="flex-1 ml-4">
                <h2 className="font-kameron text-lg font-bold text-[#1B4965]">{prescription.doctor.name}</h2>
                <p className="text-sm text-gray-600">Date: {new Date(prescription.date).toLocaleDateString()}</p>
                <p className="text-sm text-gray-600">Disease: {prescription.diseaseName}</p>
                <p className="text-sm text-gray-600">Symptoms: {prescription.symptoms}</p>
                </div>
                 {/* Download Button */}
                <div>
                    <button 
                    onClick={() => downloadPrescription(prescription)}
                    className="bg-[#1B4965] text-white px-4 py-2 rounded-md hover:bg-[#3F88C5]">
                    Download
                    </button>
                </div>
            </div>
        ))}
    </div>
)
}

export default PrescriptionsCards
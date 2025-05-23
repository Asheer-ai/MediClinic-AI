import Doctor from "../models/doctorModel.js"
import Patient from "../models/patientModel.js";
import Prescription from "../models/prescription.js";

export const addPrescription= async(req,res)=>{
    const{
        userObjectId,
        doctorObjectId,
        patientDetails,
        diseaseName,
        symptoms,
        treatment,
        medicine,
        test
    }=req.body
    try {
        const doctor=await Doctor.findById(doctorObjectId); 
        const patient=await Patient.findById(userObjectId); 

        console.log(doctor);
        console.log(patient);
        console.log(userObjectId);
        console.log(doctorObjectId);

        if(!doctor || !patient){
            return res.status(404).json({message:'Doctor or Patient not found'});
        }

        const prescription=new Prescription({
            user: userObjectId,
            doctor:doctorObjectId,
            patientDetails,
            diseaseName,
            symptoms,
            treatment,
            medicine,
            test,
        });

        await prescription.save();

        patient.prescriptions.push(prescription._id);
        await patient.save();

        res.status(201).json({message:'Prescription added successfully',prescription})
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
export const getAllPrescriptions= async(req,res)=>{
    try{
        const prescriptions=await Prescription.find().populate('user').populate('doctor');

        res.status(200).json(prescriptions);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}
export const getPrescriptionsByUserAndDoctor= async(req,res)=>{
    const {userId,doctorId} = req.params;
    
    try {
        const prescriptions=await Prescription.find({
            user:userId,
            doctor:doctorId
        })
        .populate('user')
        .populate('doctor');
        
        if(!prescriptions || prescriptions.length===0){
            return res.status(404).json({message:'No prescriptions found for this user and doctor'});
        }
        
        res.status(200).json(prescriptions);
    } catch (error) {
        res.status(500).json({message:error.message}); 
    }
}
 export const getPrescriptionsByUserId = async (req, res) => {
      const { userId } = req.params;
    
      try {
        // Find the patient by userId
        const patient = await Patient.findById(userId).populate('prescriptions');
    
        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }
    
        // Populate the prescriptions with doctor details
        const prescriptions = await Promise.all(
            patient.prescriptions.map(async (prescriptionId) => {
            const prescription = await Prescription.findById(prescriptionId).populate('doctor');
            return prescription;
            })
        );
        // const prescriptions = patient.prescriptions;
    
        res.status(200).json(prescriptions);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    };


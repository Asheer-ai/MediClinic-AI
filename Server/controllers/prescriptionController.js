import Doctor from "../models/doctorModel.js"
import Patient from "../models/patientModel.js";
import Prescription from "../models/prescription.js";

export const addPrescription= async(req,res)=>{
    const{
        userobjectId,
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
        const patient=await Patient.findById(userobjectId); 

        if(!doctor || !patient){
            return res.status(404).json({message:'Doctor or Patient not found'});
        }

        const prescription=new Prescription({
            user: userobjectId,
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
export const getPrescriptionsByUserId= async(req,res)=>{
    const { userId } = req.params;
    try {
        const patient=await Patient.findById(userId).populate('prescriptions');

        if(!patient){
            return res.status(404).json({message:'Patient not found'});
        }

        const prescriptions = await Promise.all(
            patient.prescriptions.map(async (prescriptionId)=>{
                const prescription=await Prescription.findById(prescriptionId).populate('doctor');
                return prescription;
            })
        )

        res.status(200).json(prescriptions);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};


import Doctor from "../models/doctorModel.js";

export const addDoctor= async (req,res)=>{
    try{
        const newDoctor=new Doctor(req.body);
        await newDoctor.save();
        res.status(201).json({message:'Doctor added successfully',doctor:newDoctor});
    }catch(error){
        res.status(400).json({message:'Failed to add doctor',error});
    }
}

export const getAllDoctors= async (req,res)=>{
    try {
        const doctors=await Doctor.find({});
        res.status(200).json(doctors);
    } catch (error) {
        res.status(500).json({message:'Failed to fetch doctor',error});
    }
}

export const deleteDoctor= async (req,res)=>{
    try {
        const doctor=await Doctor.findByIdAndDelete(req.params.id);
        if(!doctor){
            return res.status(404).json({message:'Doctor not found'});
        }
        res.status(200).json({message:'Doctor removed successfully'});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

export const getDoctor= async (req,res)=>{
    try {
        const doctor=await Doctor.findById(req.params.id);
        if(!doctor){
            return res.status(404).json({message:'Doctor not found'});
        }
        res.status(200).json(doctor);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

export const doctorLogin= async (req,res)=>{
    const {email,code}=req.body;
    try {
        const doctor=await Doctor.findOne({email});
        if(!doctor){
            return res.status(404).json({message:'Doctor not found'});
        }

        if(code!=="123"){
            return res.status(401).json({message:'Invalid login code'});
        }

        res.cookie('doctorId',doctor._id,{ httpOnly:true });
        res.cookie('doctorEmail',doctor.email,{ httpOnly:true });

        res.status(200).json({message:'Login Successful',doctorId:doctor._id,email:doctor.email,name:doctor.name,speciality:doctor.speciality});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
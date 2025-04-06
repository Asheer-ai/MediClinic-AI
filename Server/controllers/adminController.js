import jwt from "jsonwebtoken";
import Appointment from "../models/appointmentModel.js";

export const adminLogin = async (req,res) => {
    const {email,password}=req.body;

    const adminEmail='asheer@gmail.com';
    const adminPassword='123';

    if(email === adminEmail && password === adminPassword){
        const token=jwt.sign({email:adminEmail},'your_jwt_secret_key',{
            expiresIn:'1h'
        });

        res.cookie('adminToken',token,{
            httpOnly:true,
            maxAge:60 * 60 * 1000,
        });

        return res.status(200).json({message:'Admin Login successful'});
    }

    return res.status(401).json({message:'Invalid admin credentials'});
}

export const allPatients = async (req,res) => {
    try {
        const appointments=await Appointment.find()
        .populate('user').populate('doctor');

        return res.status(200).json(appointments)
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
import jwt from "jsonwebtoken"
import Patient from "../models/patientModel.js";
import bcrypt from "bcryptjs"

const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d'
    });
}

export const registerPatient = async(req,res,next) => {
    const { name,email,password,address,phone,dateofBirth }=req.body;
    const patientExists= await Patient.findOne({email});

    if(patientExists){
        return res.status(400).json({message:'Patient already exists'});
    }

    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(password,salt);

    const patient=await Patient.create({
        name,
        email,
        password:hashedPassword,
        address,
        phone,
        dateofBirth,
    });

    if(patient){
        res.status(200).json({
            _id:patient._id,
            name:patient.name,
            email:patient.email,
            token:generateToken(patient._id)
        })
    }else{
        return res.status(400).json({message:'Inavlid Patient data'});
    }
};

export const loginPatient=async(req,res)=>{
    const {email,password}=req.body;
    const patient= await Patient.findOne({email});

    if(patient && (await bcrypt.compare(password,patient.password))){
        res.json({
            _id:patient._id,
            name:patient.name,
            email:patient.email,
            token:generateToken(patient._id)
        });
    }else{
        return res.status(401).json({message:'Inavlid email or password'});
    }

}

export const logoutPatient = async (req, res) => {
    try {
        return res.status(200).json({ message: 'Logout successful ' });
    } catch (error) {
        return res.status(500).json({ message: 'Logout failed ',error });
    }
    
};

export const patientDetails=async(req,res)=>{
    const {patientId}=req.params;

    try {
        const patient=await Patient.findById(patientId).populate('appointment');
        if(!patient){
            return res.status(404).json({message:'Patient not found'});
        }

        return res.status(200).json({patient})
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}